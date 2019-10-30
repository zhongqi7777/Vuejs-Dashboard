<template>
  <div class="add-from">
    <el-dialog
      :title="formType=='add'?'添加用户':'编辑用户'"
      :visible.sync="dialogFormVisible"
      v-dialog-drag
    >
      <el-form :model="form">
        <el-form-item label="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="address" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="date" :label-width="formLabelWidth">
          <el-input v-model="form.date" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="reset">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import { addUser } from "@/api/userlist";
import { mapGetters, mapActions, mapState } from "vuex";
// import _ from "lodash";
export default {
  watch: {
    data(val) {
      this.dialogFormVisible = val.dialogFormVisible;
      this.formType = val.formType;
    }
  },
  props: {
    data: {
      type: Object,
      default: false
    }
  },
  components: {},
  data: function() {
    return {
      dialogFormVisible: false,
      formType: "add",
      form: {
        name: "",
        address: "",
        date: ""
      },
      formLabelWidth: "120px"
    };
  },
  computed: {
    //...mapState([""])
  },
  mounted() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed: function() {},
  methods: {
    //...mapActions([""]),
    reset() {
      this.$emit("reset", "add");
    },
    submit() {
      addUser(this.form).then(res=>{
        console.log(res);
      });
      this.reset();
    }
  }
};
</script>

<style lang="scss">
</style>

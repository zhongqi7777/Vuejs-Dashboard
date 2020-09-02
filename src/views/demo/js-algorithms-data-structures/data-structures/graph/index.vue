<template>
  <div class="container">
    <div class="header">
      <h1>图 Graph {有向图 directed 无向图 undirected}</h1>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import Graph from "./lib/Graph";
import GraphVertex from "./lib/GraphVertex"; // 点
import GraphEdge from "./lib/GraphEdge"; //边

export default {
  watch: {
    // flowData(val) {
    // }
  },
  props: {
    // data: {
    //   type: Object,
    //   default: false
    // }
  },
  components: {},
  data: function() {
    return {};
  },
  computed: {
    //...mapState([""])
  },
  mounted() {
    //const graph = new Graph();
    // // 创建点 A,B
    // const vertexA = new GraphVertex("A");
    // const vertexB = new GraphVertex("B");
    // // 添加点盗图
    // graph.addVertex(vertexA).addVertex(vertexB);
    // console.log("graph", graph);
    // console.log(graph.toString()); // 打印图中所有点
    // console.log(vertexA.getKey()); //获取点key
    // console.log(graph.getVertexByKey(vertexA.getKey())); // 通过key 获取点
    // // 添加边到无向图
    // const graph = new Graph();
    // // 创建点
    // const vertexA = new GraphVertex("A");
    // const vertexB = new GraphVertex("B");
    // const edgeAB = new GraphEdge(vertexA, vertexB); // 创建边
    // // 添加边到图
    // graph.addEdge(edgeAB);
    // const graphVertexA = graph.getVertexByKey(vertexA.getKey());
    // const graphVertexB = graph.getVertexByKey(vertexB.getKey());
    // console.log(graph.getAllVertices()); //获取图中所有点
    // console.log(graph.getAllVertices().length); // 获取点数量
    // console.log(graph.getAllVertices()[0]);
    // console.log(graphVertexA.getNeighbors().length);
    // console.log(graphVertexB.getNeighbors().length);
    //有向图
    // const graph = new Graph(true);
    // // 创建点
    // const vertexA = new GraphVertex("A");
    // const vertexB = new GraphVertex("B");
    // const edgeAB = new GraphEdge(vertexA, vertexB); // 创建边
    // 添加边到图
    // graph.addEdge(edgeAB);
    // const graphVertexA = graph.getVertexByKey(vertexA.getKey());
    // const graphVertexB = graph.getVertexByKey(vertexB.getKey());
    // console.log(graph.getAllVertices()); //获取图中所有点
    // console.log(graph.getAllVertices().length); // 获取点数量
    // console.log(graph.getAllVertices()[0]);
    // console.log(graphVertexA.getNeighbors().length);
    // console.log(graphVertexB.getNeighbors().length);
    // // 在无向图通过点查找边
    // const graph = new Graph();
    // const vertexA = new GraphVertex("A");
    // const vertexB = new GraphVertex("B");
    // const vertexC = new GraphVertex("C");
    // const edgeAB = new GraphEdge(vertexA, vertexB, 10);
    // graph.addEdge(edgeAB);
    // const graphEdgeAB = graph.findEdge(vertexA, vertexB);
    // const graphEdgeBA = graph.findEdge(vertexB, vertexA);
    // const graphEdgeAC = graph.findEdge(vertexA, vertexC);
    // const graphEdgeCA = graph.findEdge(vertexC, vertexA);
    // console.log("edgeAB", edgeAB);
    // console.log("graphEdgeAB", graphEdgeAB);
    // console.log("graphEdgeBA", graphEdgeBA);
    // console.log("graphEdgeAC", graphEdgeAC);
    // console.log("graphEdgeCA", graphEdgeCA);
    // 在有向图通过点查找边
    // const graph = new Graph(true);
    // const vertexA = new GraphVertex("A");
    // const vertexB = new GraphVertex("B");
    // const vertexC = new GraphVertex("C");
    // const edgeAB = new GraphEdge(vertexA, vertexB);
    // graph.addEdge(edgeAB);
    // const graphEdgeAB = graph.findEdge(vertexA, vertexB);
    // const graphEdgeBA = graph.findEdge(vertexB, vertexA);
    // const graphEdgeAC = graph.findEdge(vertexA, vertexC);
    // const graphEdgeCA = graph.findEdge(vertexC, vertexA);
    // console.log("edgeAB", edgeAB);
    // console.log("graphEdgeAB", graphEdgeAB);
    // console.log("graphEdgeBA", graphEdgeBA);
    // console.log("graphEdgeAC", graphEdgeAC);
    // console.log("graphEdgeCA", graphEdgeCA);
    //should return vertex neighbors
    // const graph = new Graph(true);
    // const vertexA = new GraphVertex("A");
    // const vertexB = new GraphVertex("B");
    // const vertexC = new GraphVertex("C");
    // const edgeAB = new GraphEdge(vertexA, vertexB);
    // const edgeAC = new GraphEdge(vertexA, vertexC);
    // graph.addEdge(edgeAB).addEdge(edgeAC);
    // const neighbors = graph.getNeighbors(vertexA);
    // console.log(neighbors.length);
    // console.log("neighbors", neighbors);
    //should return the list of all added edges
    // const graph = new Graph(true);
    // const vertexA = new GraphVertex("A");
    // const vertexB = new GraphVertex("B");
    // const vertexC = new GraphVertex("C");
    // const edgeAB = new GraphEdge(vertexA, vertexB);
    // const edgeBC = new GraphEdge(vertexB, vertexC);
    // graph.addEdge(edgeAB).addEdge(edgeBC);
    // const edges = graph.getAllEdges();
    // console.log(edges.length);
    // console.log("edges", edges);
    //should calculate total graph weight for default graph
    // const graph = new Graph();
    // const vertexA = new GraphVertex("A");
    // const vertexB = new GraphVertex("B");
    // const vertexC = new GraphVertex("C");
    // const vertexD = new GraphVertex("D");
    // const edgeAB = new GraphEdge(vertexA, vertexB);
    // const edgeBC = new GraphEdge(vertexB, vertexC);
    // const edgeCD = new GraphEdge(vertexC, vertexD);
    // const edgeAD = new GraphEdge(vertexA, vertexD);
    // graph
    //   .addEdge(edgeAB)
    //   .addEdge(edgeBC)
    //   .addEdge(edgeCD)
    //   .addEdge(edgeAD);
    // console.log(graph.getWeight());
    //should be possible to delete edges from graph
    // const graph = new Graph();
    // const vertexA = new GraphVertex("A");
    // const vertexB = new GraphVertex("B");
    // const vertexC = new GraphVertex("C");
    // const edgeAB = new GraphEdge(vertexA, vertexB);
    // const edgeBC = new GraphEdge(vertexB, vertexC);
    // const edgeAC = new GraphEdge(vertexA, vertexC);
    // graph
    //   .addEdge(edgeAB)
    //   .addEdge(edgeBC)
    //   .addEdge(edgeAC);
    // console.log(graph.getAllEdges().length);
    // graph.deleteEdge(edgeAB);
    // console.log(graph.getAllEdges().length);
    // console.log("graph.getAllEdges()", graph.getAllEdges());
    // console.log(
    //   "graph.getAllEdges()[0].getKey()",
    //   graph.getAllEdges()[0].getKey()
    // );
    // console.log(
    //   "graph.getAllEdges()[0].getKey()",
    //   graph.getAllEdges()[1].getKey()
    // );
    //should be possible to reverse graph
    // const vertexA = new GraphVertex("A");
    // const vertexB = new GraphVertex("B");
    // const vertexC = new GraphVertex("C");
    // const vertexD = new GraphVertex("D");
    // const edgeAB = new GraphEdge(vertexA, vertexB);
    // const edgeAC = new GraphEdge(vertexA, vertexC);
    // const edgeCD = new GraphEdge(vertexC, vertexD);
    // const graph = new Graph(true);
    // graph
    //   .addEdge(edgeAB)
    //   .addEdge(edgeAC)
    //   .addEdge(edgeCD);
    // console.log(graph.toString());
    // // console.log("graph.getAllEdges().length", graph.getAllEdges().length);
    // // console.log(graph.getNeighbors(vertexA)[0].getKey());
    // graph.reverse();
    // console.log(graph.toString());
    //should return vertices indices
    // const vertexA = new GraphVertex("A");
    // const vertexB = new GraphVertex("B");
    // const vertexC = new GraphVertex("C");
    // const vertexD = new GraphVertex("D");
    // const edgeAB = new GraphEdge(vertexA, vertexB);
    // const edgeBC = new GraphEdge(vertexB, vertexC);
    // const edgeCD = new GraphEdge(vertexC, vertexD);
    // const edgeBD = new GraphEdge(vertexB, vertexD);
    // const graph = new Graph();
    // graph
    //   .addEdge(edgeAB)
    //   .addEdge(edgeBC)
    //   .addEdge(edgeCD)
    //   .addEdge(edgeBD);
    // const verticesIndices = graph.getVerticesIndices();
    // console.log("verticesIndices", verticesIndices);
    //should generate adjacency matrix for undirected graph
    // const vertexA = new GraphVertex("A");
    // const vertexB = new GraphVertex("B");
    // const vertexC = new GraphVertex("C");
    // const vertexD = new GraphVertex("D");
    // const edgeAB = new GraphEdge(vertexA, vertexB);
    // const edgeBC = new GraphEdge(vertexB, vertexC);
    // const edgeCD = new GraphEdge(vertexC, vertexD);
    // const edgeBD = new GraphEdge(vertexB, vertexD);
    // const graph = new Graph();
    // graph
    //   .addEdge(edgeAB)
    //   .addEdge(edgeBC)
    //   .addEdge(edgeCD)
    //   .addEdge(edgeBD);
    // const adjacencyMatrix = graph.getAdjacencyMatrix();
    // console.log("adjacencyMatrix", adjacencyMatrix);

    //should generate adjacency matrix for directed graph

    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");
    const vertexD = new GraphVertex("D");

    const edgeAB = new GraphEdge(vertexA, vertexB, 2);
    const edgeBC = new GraphEdge(vertexB, vertexC, 1);
    const edgeCD = new GraphEdge(vertexC, vertexD, 5);
    const edgeBD = new GraphEdge(vertexB, vertexD, 7);

    const graph = new Graph(true);
    graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCD)
      .addEdge(edgeBD);

    const adjacencyMatrix = graph.getAdjacencyMatrix();

    console.log("adjacencyMatrix", adjacencyMatrix);
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed: function() {},
  methods: {
    //...mapActions([""]),
  }
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  height: 100%;

  .header {
    height: 100px;
    display: flex;
    justify-content: center;
  }

  .content {
    flex: 1;
  }
}
</style>

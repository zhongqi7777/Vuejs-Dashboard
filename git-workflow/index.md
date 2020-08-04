克隆代码到本地

git clone git://github.com/schacon/grit.git

git clone git://github.com/schacon/grit.git mygrid 克隆指定文件夹

查看远程分支
git branch -r

查看本地分支
git branch

查看远程分支
git branch -r

查看远程分支和本地分支(即列出所有分支)
git branch -a

切换远程分支
git checkout -b dev origin/dev (作用 checkout 远程分支 dev,在本地起名 dev 分支,并)
git checkout master 切换到 master 分支

创建本地分支
git branch [name] ----注意新分支创建后不会自动切换为当前分支

创建本地分支并立即切换过去
git checkout -b [name] -
将创建本分分支推送到远程分支
git push origin <branch name>

删除本地分支
git branch -d <branch name>

删除远程分支
git push origin :<branch name>

更新本地仓库至最新改动
git pull

合并其他分支到当前分支(产生提交记录)
git merge <branch>  
git merge --squash <branch>

git merge --no-ff <branch>可以保留之前的分支历史，能够更好的查看分支历史

git merge 单个文件
具体操作
checkout A 分支的 a 文件
git checkout --patch A file path
最后，弹出修改确认提示：
Apply this hunk to index and worktree [y,n,q,a,d,/,K,g,e,?]?
在弹出的都选 y 即可
如果不想应用更改的，在弹出的都选 n 即可

合并其他分支到当前分支(不产生提交记录)
git rebase <branch>

合并遇到冲突,手动解决,并且标记合并成功
git add <file name>

工作区指进行 add 操作之前文件
暂存区指进行 add 操作之后文件
本地仓库对应 commit 操作之后文件
预览差异
git diff <source_branch> <target_branch> 分支差异比较
git diff：是查看 working tree(工作区)与 git add 操作之后(暂存区)的差别的。（git add 后两者就同步）
git diff --cached：是查看 i 暂存区与本地仓库的差别的。（git commit 后两者就同步）
git diff HEAD：是查看 working tree(工作区)和 commit 之后(即本地仓库)的差别的。（你一定没有忘记，HEAD 代表的是最近的一次 commit 的信息，即：git commit 后 working tree 未做任何操作，那么两者就是同步的，没有差异

比较工作区与指定 commit-id 的差异
git diff commit-id [<path>...]

比较暂存区与指定 commit-id 的差异
git diff --cached [<commit-id>][<path>...]

比较两个 commit-id 之间的差异
git diff [<commit-id>][<commit-id>]

比较来自两个不同分支同一个文件
git diff ylb wzy src/page/finance/flow/index.vue

标签
git tag 1.0.0 1b2e1d63ff(提交 ID git log 获取提交 ID)

查看本地历史仓库提交记录
git log
查看某人提交记录

查看帮助
git log --help

撤销工作区操作(暂存区的文件和新文件不受影响)
git checout ./ (对应所有文件)
git checkout --<file name>(path 文件路径,指定文件)

撤销暂存区操作
git reset HEAD < filw path>(文件路径可选)

撤销工作区,暂存区，本地仓库操作
git reset --hard origin/master

检查文件当前状态
git status

文件添加剂到暂存区(即跟踪新文件)
git add <file name>

文件提交到本地仓库
git commit <file name>
git commit -m "注释说明"

跳过暂存区
git commit -a -m "注释说明"

移除工作区文件(提交时该文件不在纳入版本管理(即该文件不受 git 管理)
git rm <file name>

从仓库删除(亦即暂存区移除),但是任保留工作目录(即删除暂存区,保留工作区)
git rm --cached <fil name>

同时删除工作区和暂存区文件
git rm -f <file name>

将文件恢复到某个版本时的状态(注意 ID 不需要全部复制一部分即可)
git checkout id 文件名

恢复所有的文件
git reset --hard id

恢复到上一个版本
git reset --hard HEAD^

恢复到前两个版本
git reset --hard HEAD~2

查看恢复记录
git reflog

撤销未提交的修改
git checkout <file name>
例如 git checkout src/com/Android/.../xxx.Java 撤销所有的 java 文件
git checkout 撤销所有的修改

撤销某次操作，此次操作之前和之后的 commit 和 history 都会保留
git revert
git revert HEAD 撤销前一次 commit

撤销修改
场景 1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令 git checkout -- file。

场景 2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令 git reset HEAD file，就回到了场景 1，第二步按场景 1 操作。

场景 3：已经提交了不合适的修改到版本库时，想要撤销本次提交，git reset HEAD^

查询历史提交记录
git log --author=gbyukg 按照作者查询

git log --graph 图形界面方式列出

--merge 查询合并过的历史提交记录
--no-merges 查询未合并提交的历史记录
-n 查询近 n 次提交信息
-filename 查看文件提交记录
-filename/ 查看文件显文件提交记录

文件移除版本管理
rm -rf <file name>
git add -A
git pull
git rm -r --cached <file name>
git push origin <branch name>

git log fromat

git log --all --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset %cn' --abbrev-commit --date=relative

git tag <release_tag>
git push --tags

delete remote tag name
git push origin :tagname
git push --delete origin tagname

delete a local tag
git tag --delete tagname

回到远程仓库的状态
抛弃本地仓库的所有版本(commit)，回到远程仓库的状态
git fetch --all && git reset --hard <remote branch> && git clean -f -d

把暂存区的指定 file 放到工作区中
git reset <file-name>

清除本地缓存，重新提交，即可保证和 .gitignore 规则一致
git rm -r --cached

\$ git pull <远程主机名> <远程分支名>:<本地分支名>
比如，取回 origin 主机的 next 分支，与本地的 master 分支合并，需要写成下面这样。

\$ git pull origin next:master
如果远程分支是与当前分支合并，则冒号后面的部分可以省略。

\$ git pull origin next、

撤销工作区中文件修改
git checkout . && git clean -xdf

撤销暂存区中文件修改
git reset HEAD -- 文件

git clean 参数
-n 显示 将要 删除的 文件 和 目录
-f 删除 文件，-df 删除 文件 和 目录
git clean -n
git clean -df
git clean -f

git 比较两个分支

1. git diff [branchA][branchb] >>diff.diff 会在当前目录下生成一个.diff 文件
   打开后查看
2. git log branchA ^branchB 比较 A 分支中有 B 分支没有的提交记录

Start git-bash

git fetch origin
git remote prune origin（可以用这个命令清除无效分支）

git config --global credential.helper wincred

Git-本地已有仓库推送到远程

1. 关联远程仓库
   git remote add origin <你的远程仓库地址>

2. 查看当前仓库状态

git status  
//如果有未提交的，请先提交，如果已全部提交，请执行下面的命令
git pull origin master

3.提交到远程

git push -u origin master

git push -f origin master

git 远程服务器覆盖本地版本
git fetch --all
git reset --hard origin/dev
git pull

//git tag
// 查看标签,可加上参数-l(列表形式列出） -n(附加说明)
git tag [-l -n]
// 查看符合检索条件的标签
git tag -l 1._._
// 查看对应标签状态
git checkout 1.0.0
// 创建标签(本地)
git tag 1.0.0-light
// 创建带备注标签(推荐)
git tag -a 1.0.0 -m "这是备注信息"
// 针对特定 commit 版本 SHA 创建标签
git tag -a 1.0.0 0c3b62d -m "这是备注信息"
// 删除标签(本地)
git tag -d 1.0.0
// 将本地所有标签发布到远程仓库
git push origin --tags
// 指定版本发送
git push origin 1.0.0
// 删除远程仓库对应标签（Git 版本 > V1.7.0）
git push origin --delete 1.0.0
// 旧版本 Git
git push origin :refs/tags/1.0.0
// 获取远程标签
git fetch origin tag "标签名称"

// 查看关联远程仓库
git remote -v
//移除远程仓库关联
git remote remove origin
git remote remove heroku
//关联远程仓库
git remote add origin git@first:yanlibo2021/Vuejs-Dashboard.git

//
git remote show origin //可以看到删除分支情况
git remote prune origin
git branch -a

// set global
git config --global user.name "admin"
git config --global user.email "zhansan@996icu.com"

//set local
git config user.email "superman@org2.com"
git config user.name "Super Man"

取消设置
git config --global --unset user.name
git config --global --unset user.email

查看
git config --global user.name
git config --global user.email

取消设置
git config --global --unset user.email

//Multiple SSH Keys on Github
ssh-keygen -t rsa -b 4096 //create default first ssh key
ssh-keygen -t rsa -b 4096 -C "you@example.com" //create sencond ssh key

ssh-add -l
ssh-add -D
ssh-add ~/.ssh/id_rsa
ssh-add ~/.ssh/thir_id_rsa

// clone
git@first:your_github_username/repository_name.git
git@second:your_github_username/repository_name.git
git@thir:your_github_username/repository_name.git
//create config
touch config

//set config

# First

Host first
HostName github.com
User git
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
IdentitiesOnly yes

# Second

Host second
HostName github.com
User git
PreferredAuthentications publickey
IdentityFile ~/.ssh/second_id_rsa
IdentitiesOnly yes

# thir

Host thir
HostName github.com
User git
PreferredAuthentications publickey
IdentityFile ~/.ssh/thir_id_rsa
IdentitiesOnly yes

//after add thir_id_rsa.pub
// test connect

ssh-agent bash //If it appears Could not open a connection to your authentication agent
ssh -T first
ssh -T second
ssh -T thir

file local:C:\Users\Administrator\.ssh

Go to your Github account

1. Click : SSH and GPG keys

2. New SSH Key and Past it there

3. Add SSH Key

Done!

//在 github settings/ SSH Keys GPG keys/ 下,new SSH Keyss
//title github name
//content id_rsa.pub(该文件内容 copy 输入即可)

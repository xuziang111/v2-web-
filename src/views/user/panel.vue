<template>
  <main>
    <header>
      <el-row>
        <el-col :span="4"><div>我是logo</div></el-col>
        <el-col :span="4" :offset="16"><div>节点</div></el-col>
      </el-row>
    </header>
    <el-row :gutter="20">
      <el-col :xl="6" :lg="6" :md="24" :xs="24">
        <el-row :gutter="20" :span="6">
          <el-col xl="24" :lg="24" :md="6" :xs="24">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>账号明细</span>
              </div>
              <div id="userDefinite">
                <div
                  v-for="xxx in this.userData.definite"
                  :key="xxx.name"
                  class="text item"
                >
                  <div class="tipss">{{ xxx.cname }}</div>
                  <div class="textNormal">{{ xxx.val }}</div>
                </div>
              </div>
            </el-card>
          </el-col>

          <el-col xl="24" :lg="24" :md="18" :xs="24">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>快速配置</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                  >操作按钮</el-button
                >
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{ "列表内容 " + o }}
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>

      <el-col :xl="18" :lg="18" :md="24" :xs="24">
        <el-row :gutter="20" :span="6">
          <el-col xl="24" :lg="24" :md="24" :xs="24">
            <el-card class="box-card">
              <div class="uim-anchor" id="cardSwitch">
                <ul class="uim-anchor-inner" @click="switchCard($event)">
                  <li
                    data-page="user-resourse"
                    class="uim-anchor-active"
                    id="cards1"
                  ></li>
                  <li data-page="user-settings" class="" id="cards2"></li>
                </ul>
              </div>
              <div v-show="ifkeyongziyuan">
                <div class="cardHeader">
                  <span>可用资源</span>
                </div>
                <el-row type="flex" justify="center">
                  <el-col
                    :span="4"
                    v-for="yyy in userData.keyongziyuan"
                    :key="yyy.name"
                    class="text item"
                  >
                    <div class="tipss">{{ yyy.cname }}</div>
                    <div class="textNormal">{{ yyy.val }}</div>
                  </el-col>
                  <el-col :span="8" class="dataProgress-container">
                    <div><p>已用流量/今日已用</p></div>
                    <el-progress
                      :text-inside="true"
                      :stroke-width="12"
                      :percentage="70"
                      class="dataProgress"
                      id="progressTest"
                    >
                      <div>xxx</div>
                    </el-progress>
                    <div><p>可用流量</p></div>
                    <el-progress
                      :text-inside="true"
                      :stroke-width="12"
                      :percentage="70"
                      class="dataProgress"
                    ></el-progress>
                  </el-col>
                </el-row>
              </div>
              <div v-show="ifLinkMessage">
                <div class="cardHeader">
                  <span>连接信息</span>
                </div>
                <el-row type="flex" justify="center">
                  <el-col
                    :span="4"
                    v-for="zzz in linkInfo"
                    :key="zzz.name"
                    class="text item"
                  >
                    <div class="tipss">{{ zzz.cname }}</div>
                    <div class="textNormal">{{ zzz.val }}</div>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </el-col>

          <el-col xl="24" :lg="24" :md="24" :xs="24">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>公告</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                  >操作按钮</el-button
                >
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{ "列表内容 " + o }}
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </main>
</template>

<script>
export default {
  name: "panel",
  data() {
    return {
      radio: "1",
      ifLinkMessage: false,
      ifkeyongziyuan: true,
      userData: {
        definite: [
          { name: "username", val: "用户名", cname: "用户名" },
          { name: "vipLv", val: 1, cname: "VIP等级" },
          { name: "email", val: "11111111111@qq.com", cname: "邮箱" },
          { name: "deposit", val: 3, cname: "余额" }
        ],
        keyongziyuan: [
          { name: "LvExp", val: 2, cname: "等级有效期" },
          { name: "accountExp", val: 29, cname: "账号有效期" },
          { name: "clientNum", val: 6, cname: "在线设备数" },
          { name: "rateLimiting", val: "无限制", cname: "端口速率" }
        ]
      },
      linkInfo: [
        { name: "port", val: 23333, cname: "端口" },
        { name: "password", val: "123456", cname: "密码" },
        { name: "security", val: "chacha20", cname: "加密" },
        { name: "xieyi", val: "auth_aes12", cname: "协议" },
        { name: "hunxiao", val: "plain", cname: "混淆" },
        { name: "hunxiaocanshu", val: "wns.wwww", cname: "混淆参数" }
      ]
    };
  },
  methods: {
    switchCard: function(e) {
      if (e.target.className !== "uim-anchor-active") {
        e.currentTarget.children.forEach(function(x) {
          x.className = "";
        });
        e.target.className = "uim-anchor-active";
        if (e.target.id === "cards1") {
          this.ifLinkMessage = false;
          this.ifkeyongziyuan = true;
        } else if (e.target.id === "cards2") {
          this.ifLinkMessage = true;
          this.ifkeyongziyuan = false;
        }
      }
    }
  },
  mounted: function() {}
};
</script>

<style scoped>
.tipss {
  color: #1997c6;
  border: 1px solid #1997c6;
  display: inline-block;
  margin: 0;
  padding: 0.2rem 0.7rem;
  border: 1px solid;
  font-size: 14px;
  border-radius: 3px;
  outline: none;
}
#userDefinite {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  text-align: center;
}
#userDefinite > div {
  width: 50%;
  margin: 0 0 20px 0;
}
.textNormal {
  padding-right: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #b1b3bb;
  margin: 0.75rem 0;
  white-space: nowrap;
  padding: 0;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
}

#cardSwitch {
  position: absolute;
  right: 20px;
  top: 1px;
}
.uim-anchor {
  position: absolute;
  right: 1rem;
}
.uim-anchor ul {
  background-color: transparent;
  margin: 0;
}
.uim-anchor li.uim-anchor-active {
  background-color: #1997c6;
  border-color: #7cb7f7;
  -webkit-box-shadow: 0 0 5px 0 #a1e2e2;
  box-shadow: 0 0 5px 0 #a1e2e2;
  border-top-color: #7cb7f7;
}
.uim-anchor li {
  list-style: none;
  width: 1.6rem;
  height: 1.75rem;
  display: block;
  background-color: transparent;
  border: 2px solid #434857;
  border-top-color: transparent;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  cursor: pointer;
  z-index: 1;
  outline: none;
}
.uim-anchor li:last-of-type {
  border-radius: 0 0 12px 12px;
}

.cardHeader {
  margin-bottom: 30px;
}
.dataProgress-container {
  font-size: 12px;
}
.dataProgress-container p {
  padding: 0;
  margin: 0;
}
.dataProgress {
  margin-top: 5px;
}
</style>

<template>
  <div class="home-page">
    <div class="title">
      <h2>首页概览</h2>
    </div>
    <div class="card-grid">
      <div class="card blue">
        <h3>总用户</h3>
        <p>128</p>
      </div>
      <div class="card green">
        <h3>今日访问</h3>
        <p>36</p>
      </div>
      <div class="card orange">
        <h3>订单数</h3>
        <p>58</p>
      </div>
      <div class="card purple">
        <h3>系统状态</h3>
        <p>运行中</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page { padding: 10px; }
.title { margin-bottom: 20px; }
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.blue p { color: #1890ff; font-size:24px; font-weight:bold; }
.green p { color: #00b42a; font-size:24px; font-weight:bold; }
.orange p { color: #ff7d00; font-size:24px; font-weight:bold; }
.purple p { color: #722ed1; font-size:24px; font-weight:bold; }
</style>
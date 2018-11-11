<template>
  <div>
    <imp-header></imp-header>
    <router-view :key="$route.path + $route.query.t"></router-view>
    <imp-footer></imp-footer>
  </div>
</template>

<script>
import impHeader from '@/components/header'
import impFooter from '@/components/footer'

export default {
  components: {
    impHeader,
    impFooter
  }
}
</script>

<style lang="less">
  @import '../../style/mixin';
  .data_section{
    padding: 20px;
    margin-bottom: 40px;
    .section_title{
      text-align: center;
      font-size: 30px;
      margin-bottom: 10px;
    }
    .data_list{
      text-align: center;
      font-size: 14px;
      color: #666;
      border-radius: 6px;
      background: #E5E9F2;
      .data_num{
        color: #333;
        font-size: 26px;

      }
      .head{
        border-radius: 6px;
        font-size: 22px;
        padding: 4px 0;
        color: #fff;
        display: inline-block;
      }
    }
    .today_head{
      background: #FF9800;
    }
    .all_head{
      background: #20A0FF;
    }
  }
  .wan{
    .sc(16px, #333)
  }
  th {
    font-weight: bold;
  }
  thead th, .el-table__header-wrapper thead th{
    background-color: #faffff;
    color: #1f2d3d;
  }
</style>

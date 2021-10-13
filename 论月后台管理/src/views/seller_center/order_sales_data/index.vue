<template>
  <div class="login">
    <div class="box">
      <el-tabs type="border-card">
        <el-tab-pane label="顾客访问数据">
          <div id="echarts" ref="aa">
          </div>
        </el-tab-pane>

        <el-tab-pane label="产品销售数据">
          <div id="echartTwo" ref="bb">
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data:[
          
        ]
      }
    },
    // echarts容器记得设置宽高
    mounted() {
      this.getMap();
      //初始化图表
      let ec = this.$echarts.init(this.$refs.aa)
      //图表配置项
      let options = {
        title: {
          text: '单位时间内客访量',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} /人'
          },
          axisPointer: {
            snap: true
          }
        },
        visualMap: {
          show: false,
          dimension: 0,
          pieces: [{
            lte: 6,
            color: 'green'
          }, {
            gt: 6,
            lte: 8,
            color: 'red'
          }, {
            gt: 8,
            lte: 14,
            color: 'green'
          }, {
            gt: 14,
            lte: 17,
            color: 'red'
          }, {
            gt: 17,
            color: 'green'
          }]
        },
        series: [
          {
            name: '访客',
            type: 'line',
            smooth: true,
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
            markArea: {
              itemStyle: {
                color: 'rgba(255, 173, 177, 0.4)'
              },
              data: [[{
                name: '早高峰',
                xAxis: '07:30'
              }, {
                xAxis: '10:00'
              }], [{
                name: '晚高峰',
                xAxis: '17:30'
              }, {
                xAxis: '21:15'
              }]]
            }
          }
        ]
      };
      //设置配置项
      ec.setOption(options);
    },
    methods: {
      getMap() {
        let ecTwo = this.$echarts.init(this.$refs.bb)
        let builderJson = {
          "all": 10887,
          "charts": {
            "服装": 3237,
            "男装": 2164,
            "手机": 7561,
            "手机配件": 7778,
            "平板": 7355,
            "平板配件": 2405,
            "包包": 1842,
            "服饰": 2090,
            "配饰": 1762,
            "鞋子": 1593,
            "饰品": 2060,
            "其他": 1537,
          },
          "components": {
            "geo": 2788,
            "title": 9575,
            "legend": 9400,
            "tooltip": 9466,
            "grid": 9266,
            "markPoint": 3419,
            "markLine": 2984,
            "timeline": 2739,
            "dataZoom": 2744,
            "visualMap": 2466,
            "toolbox": 3034,
            "polar": 1945
          },
          "ie": 9743
        };

        let downloadJson = {
          "服装": 3237,
          "男装": 2164,
          "手机": 7561,
          "手机配件": 7778,
          "平板": 7355,
          "平板配件": 2405,
          "包包": 1842,
          "服饰": 2090,
          "配饰": 1762,
          "鞋子": 1593,
          "饰品": 2060,
          "其他": 1537,
        };

        let themeJson = {
          "服装": 2353,
          "男装": 2164,
          "手机": 7561,
          "手机配件": 7778,
          "平板": 7355,
          "平板配件": 2405,
          "包包": 1842,
          "服饰": 2090,
          "配饰": 1762,
          "鞋子": 1593,
          "饰品": 2060,
          "其他": 1537,
        };

        let waterMarkText = 'ECHARTS';

        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        canvas.width = canvas.height = 100;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.globalAlpha = 0.08;
        ctx.font = '20px Microsoft Yahei';
        ctx.translate(50, 50);
        ctx.rotate(-Math.PI / 4);
        ctx.fillText(waterMarkText, 0, 0);

        let option = {
          backgroundColor: {
            type: 'pattern',
            image: canvas,
            repeat: 'repeat'
          },
          tooltip: {},
          title: [{
            text: '产品销量额',
            subtext: '总计 ' + builderJson.all,
            left: '25%',
            textAlign: 'center'
          }, {
            text: '各产品销售分布',
            subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
              return all + downloadJson[key];
            }, 0),
            left: '75%',
            textAlign: 'center'
          }, {
            text: '各产品毛利润',
            subtext: '总计 ' + Object.keys(themeJson).reduce(function (all, key) {
              return all + themeJson[key];
            }, 0),
            left: '75%',
            top: '50%',
            textAlign: 'center'
          }],
          grid: [{
            top: 50,
            width: '50%',
            bottom: '45%',
            left: 10,
            containLabel: true
          }, {
            top: '55%',
            width: '50%',
            bottom: 0,
            left: 10,
            containLabel: true
          }],
          xAxis: [{
            type: 'value',
            max: builderJson.all,
            splitLine: {
              show: false
            }
          }, {
            type: 'value',
            max: builderJson.all,
            gridIndex: 1,
            splitLine: {
              show: false
            }
          }],
          yAxis: [{
            type: 'category',
            data: Object.keys(builderJson.charts),
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }, {
            gridIndex: 1,
            type: 'category',
            data: Object.keys(builderJson.components),
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }],
          series: [{
            type: 'bar',
            stack: 'chart',
            z: 3,
            label: {
              position: 'right',
              show: true
            },
            data: Object.keys(builderJson.charts).map(function (key) {
              return builderJson.charts[key];
            })
          }, {
            type: 'bar',
            stack: 'chart',
            silent: true,
            itemStyle: {
              color: '#eee'
            },
            data: Object.keys(builderJson.charts).map(function (key) {
              return builderJson.all - builderJson.charts[key];
            })
          }, {
            type: 'bar',
            stack: 'component',
            xAxisIndex: 1,
            yAxisIndex: 1,
            z: 3,
            label: {
              position: 'right',
              show: true
            },
            data: Object.keys(builderJson.components).map(function (key) {
              return builderJson.components[key];
            })
          }, {
            type: 'bar',
            stack: 'component',
            silent: true,
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
              color: '#eee'
            },
            data: Object.keys(builderJson.components).map(function (key) {
              return builderJson.all - builderJson.components[key];
            })
          }, {
            type: 'pie',
            radius: [0, '30%'],
            center: ['75%', '25%'],
            data: Object.keys(downloadJson).map(function (key) {
              return {
                name: key.replace('.js', ''),
                value: downloadJson[key]
              };
            })
          }, {
            type: 'pie',
            radius: [0, '30%'],
            center: ['75%', '75%'],
            data: Object.keys(themeJson).map(function (key) {
              return {
                name: key.replace('.js', ''),
                value: themeJson[key]
              };
            })
          }]
        };
        ecTwo.setOption(builderJson)
        ecTwo.setOption(downloadJson)
        ecTwo.setOption(themeJson)
        ecTwo.setOption(option)
      }
    },
  }
</script>
<style scoped>
  .box {
    width: 100wv;
    height: 100hv;
  }
  #echarts {
    width: 800px;
    height: 600px;
  }

  #echartTwo {
    width: 800px;
    height: 600px;
  }
</style>
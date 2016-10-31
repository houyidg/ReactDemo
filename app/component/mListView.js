/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  TouchableOpacity, AppRegistry, ListView, Text, View, Image
} from 'react-native';

var THUMB_URLS = [
  { uri: "http://www.qq745.com/uploads/allimg/150408/1-15040PJ142-50.jpg" },
  { uri: "http://ww2.sinaimg.cn/large/8989048bjw1dutawvaz66j.jpg" },
  { uri: "http://img.lenovomm.com/s3/img/app/app-img-lestore/1993-2015-07-14062642-1436869602788.jpg?isCompress=true&width=342&height=513&quantity=0.8&rotate=true&dk=2" },
  { uri: "http://c.hiphotos.baidu.com/exp/whcrop=160,120/sign=57e0ac939058d109c4b6fff0be28f18e/b8389b504fc2d5620f811f00e51190ef77c66c56.jpg" },
  { uri: "http://f.hiphotos.baidu.com/exp/whcrop=160,120/sign=c3918fdeba014a90816b10ffc6070423/34fae6cd7b899e51d2350a7841a7d933c8950d26.jpg" },
  { uri: "http://f.hiphotos.baidu.com/exp/whcrop=160,120/sign=2aba0e6674c6a7efb973fe64928a9260/902397dda144ad3494292c3ed2a20cf430ad85f1.jpg" },
  { uri: "http://v1.qzone.cc/avatar/201503/04/17/44/54f6d3f8ae76c662.jpg%21200x200.jpg" },
  { uri: "http://awb.img.xmtbang.com/img/uploadnew/201510/22/8d822cf398d1482fbe3d0ac6208050c4.jpg" },
  { uri: "http://awb.img1.xmtbang.com/wechatmsg2015/article201506/20150601/thumb/6abcaf1a9c69496b8d51ec13eabfb5dd.jpg" },
  { uri: "http://photo.jokeji.cn/uppic/15-06/27/17424334047046.jpg" },
  { uri: "http://imgsrc.baidu.com/forum/w%3D580/sign=7eb05e9eddf9d72a17641015e428282a/3e87194c510fd9f9b3d66fc8212dd42a2a34a4c9.jpg" },
  { uri: "http://img3.redocn.com/tupian/20120703/pazaimeinvdatuishangdeheibaichangmaochongwugou_664529_small.jpg" },
];
class MyListView extends React.Component {
  // 初始化模拟数据
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8', 'row 9', 'row 10', 'row 11', 'row 12']),
    };
  }

  _renderRow(rowData: string, sectionID: number, rowID: number) {
    const styles = {
      row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
      },
      thumb: {
        width: 50,
        height: 50,
      },
    };

    var imgSource = THUMB_URLS[rowID];
    return (
      <TouchableOpacity>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={imgSource} />
            <Text style={{  fontSize: 16, color: 'blue' , justifyContent: 'center',}}>
              {rowData + '测试数据~~~~~~~~~~~~'+sectionID}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{ paddingTop: 5 ,flex:1}}>
        <ListView
         initialListSize={12}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          />
      </View>
    );
  }
}

export default MyListView;

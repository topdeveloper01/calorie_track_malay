import {StyleSheet} from 'react-native';
import constant from '../constant'

const styles = StyleSheet.create({
    w_100: {width : '100%'},
    fs_8: { fontSize: 8 },
    fs_11 : {fontSize : 11},
    fs_12: { fontSize: 12 },
    fs_14: { fontSize: 14 },
    fs_16: { fontSize: 16 },
    fs_18: { fontSize: 18 },
    fs_20: { fontSize: 20 },
    fs_24: { fontSize: 24 },
    ml_8 : {marginLeft : 8},
    ml_12 : {marginLeft : 12},
    mr_8 : {marginRight : 8},
    mr_12 : {marginRight : 12},
    pl_4 : {paddingLeft : 4},
    pl_8 : {paddingLeft : 8},
    pl_12 : {paddingLeft : 12},
    pl_16 : {paddingLeft : 16},
    pr_8 : {paddingRight : 8},
    pr_12 : {paddingRight : 12},
    pt_8 : {paddingTop : 8},
    pt_12 : {paddingTop : 12},
    pb_8 : {paddingBottom : 8},
    pb_12 : {paddingBottom : 12},
    flex_1 : {flex : 1},
    row_center: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    col_center: { flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
    row_center_start: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
    col_center_start: { flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' },
    color_title: { color: constant.C_BLACK_90, fontWeight : '500' },
    color_desc: { color: constant.C_BLACK_60, fontWeight : '500' },
    text_left: {textAlign:'left', width: '100%'},
    text_center: {textAlign:'center', width: '100%'},
    text_right: {textAlign:'right', width: '100%'},
});

export default styles
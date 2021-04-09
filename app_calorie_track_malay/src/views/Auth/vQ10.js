import React from 'react';
import {View, Text, StyleSheet,StatusBar, ScrollView,} from 'react-native';
import { connect } from 'react-redux';
// custom import
import {setAnswer} from '../../redux/actions/user';
import { constant, common, Strings, Gstyles } from '../../utils' //'@utils';
import { InputCheckbox } from '../../components/Auth/Inputs';
import {RectBtn} from '../../components/Auth/Btns';
import Stepper from '../../components/Auth/Stepper';
import Spacing from '../../components/Global/Spacing';
//svg
import Svg15 from '../../assets/svgs/auth/15.svg'

class vQ10 extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            loading: false,
            checked : []
        }
    }

    onSelectItem = (key) => {
        let tmp = this.state.checked.slice(0, this.state.checked.length)
        if(this.state.checked.filter(item => item == key).length == 0) {
            tmp.push(key)
        }
        else {
            let foundIndex = this.state.checked.findIndex(item => item == key)
            if(foundIndex != -1) {
                tmp.splice(foundIndex, 1)
            }
        }
        this.setState({checked: tmp})
    }

    isChecked=(key)=>{
        return this.state.checked.filter(item => item == key).length > 0
    }

    onGoNext = () => {
        this.props.setAnswer({
            ...this.props.answerInfo,
            sleep : this.state.checked
        })
        this.props.navigation.navigate('q11')
    }

    render() {
        return (
            <React.Fragment>
                <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
                <ScrollView style={styles.container}>
                    <Spacing height={70} />
                    <Stepper index={12} />
                    <Svg15 width={'100%'} height={230} style={styles.img}/>
                    <View style={Gstyles.col_center}>
                        <Text style={styles.title_txt}>{Strings["Is there anything you want to improve about your sleep?"]}</Text>
                    </View>
                    <View style={[Gstyles.col_center, styles.btn_view]}>
                        {
                            constant.q_sleep.map((item, index) => 
                            <InputCheckbox key={index} onPress={()=>this.onSelectItem(item.key)} 
                                checked={this.isChecked(item.key)} name={item.name} />
                            )
                        }
                    </View>
                    <View style={[Gstyles.col_center, styles.nextbtn_view]}>
                        <RectBtn onPress={this.onGoNext} name={Strings["Next"]} />
                    </View>
                </ScrollView>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'column', paddingLeft : 25, paddingRight : 25, backgroundColor : constant.C_BLACK_0
    },
    title_txt: { fontSize: 14, fontWeight: '500', width : 220, color: constant.C_BLACK_100, textAlign: 'center',},
    desc_txt: { fontSize: 14, fontWeight: '400', color: constant.C_BLACK_50, textAlign: 'center',},
    img_view: { paddingRight: 35 },
    img: { width: '100%', height: 230, resizeMode: 'contain', marginTop : 30, marginBottom : 40 },
    btn_view: { marginTop: 16, },
    nextbtn_view : { marginTop: 30, marginBottom : 30, },
});

const mapStatetoProps=(state)=>{
    return {
        answerInfo : state.user.answerInfo
    }
}
const mapDispatchToProps = {
    setAnswer, 
}
export default connect(mapStatetoProps, mapDispatchToProps)(vQ10);
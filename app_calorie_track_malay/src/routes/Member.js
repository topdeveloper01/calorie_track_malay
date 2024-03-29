import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// custom import
// home
import HomeTab from '../views/Home';
// diary stack
import vWeekview from '../views/Diary/vWeekview';
import vEasierDay from '../views/Diary/vEasierDay';
import vAppBadge from '../views/Diary/vAppBadge';
import vShare from '../views/Diary/vShare';
import vSetmyown from '../views/Diary/vSetmyown';
import vOptiondiet from '../views/Diary/vOptiondiet';
import vAddMeal from '../views/Diary/vAddMeal';
import vQuickAdd from '../views/Diary/vQuickAdd';
import vCreateMeal from '../views/Diary/vCreateMeal';
import vCreateFood from '../views/Diary/vCreateFood';
import vAddFood from '../views/Diary/vAddFood';
import vAddNote from '../views/Diary/vAddNote';
import vAddActivity from '../views/Diary/vAddActivity';
import vNewExercise from '../views/Diary/vNewExercise';
import vAddExercise from '../views/Diary/vAddExercise';
import vTakePhoto from '../views/Diary/vTakePhoto';
import vAddDirection from '../views/Diary/vAddDirection';
import vScanBarcode from '../views/Diary/vScanBarcode';
import vWeeklyMealPlan from '../views/Diary/vWeeklyMealPlan';
import vTrackingSteps from '../views/Diary/vTrackingSteps';
import vTrackingSteps1 from '../views/Diary/vTrackingSteps1';
import vTrackingSteps2 from '../views/Diary/vTrackingSteps2';
import vFoodWEstimation from '../views/Diary/vFoodWEstimation';
// discover stack
import vMealDetails from '../views/Discover/vMealDetails';

const Stack = createStackNavigator();
export default function Route() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                // this options hide all header
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="home"
            >
                <Stack.Screen name="home" component={HomeTab} />
                <Stack.Screen name="discover_meal_detail" component={vMealDetails} />

                {/* Diary Options */}
                <Stack.Screen name="diary_weekview" component={vWeekview} />
                <Stack.Screen name="diary_easierday" component={vEasierDay} />
                <Stack.Screen name="diary_caloriebadge" component={vAppBadge} />
                <Stack.Screen name="diary_share" component={vShare} />
                <Stack.Screen name="diary_setmyown" component={vSetmyown} />
                <Stack.Screen name="diary_optiondiet" component={vOptiondiet} />
                
                {/* Add Activity */}
                <Stack.Screen name="diary_addnote" component={vAddNote} />
                <Stack.Screen name="diary_addactivity" component={vAddActivity} />
                <Stack.Screen name="diary_newexercise" component={vNewExercise} />
                <Stack.Screen name="diary_addexercise" component={vAddExercise} />
                
                {/* Add Meal */}
                <Stack.Screen name="diary_addmeal" component={vAddMeal} />
                <Stack.Screen name="diary_quickadd" component={vQuickAdd} />
                <Stack.Screen name="diary_createmeal" component={vCreateMeal} />
                <Stack.Screen name="diary_createfood" component={vCreateFood} />
                <Stack.Screen name="diary_addfood" component={vAddFood} />
                <Stack.Screen name="diary_takephoto" component={vTakePhoto} />
                <Stack.Screen name="diary_adddirection" component={vAddDirection} />
                <Stack.Screen name="diary_scanbarcode" component={vScanBarcode} />
                <Stack.Screen name="diary_weeklymealplan" component={vWeeklyMealPlan} />
                <Stack.Screen name="diary_food_weight_estimation" component={vFoodWEstimation} />

                {/* Manage steps tracking */}
                <Stack.Screen name="diary_trackingsteps" component={vTrackingSteps} />
                <Stack.Screen name="diary_trackingsteps_dailygoal" component={vTrackingSteps1} />
                <Stack.Screen name="diary_trackingsteps_pedometer" component={vTrackingSteps2} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

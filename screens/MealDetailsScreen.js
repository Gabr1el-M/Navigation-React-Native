import { useLayoutEffect } from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native'

import { MEALS } from '../assets/data/dummy-data';
import { IconButton } from '../components/IconButton';
import { MealDetails } from '../components/MealDetails';

export default function MealDetailsScreen({ route, navigation }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        console.log('Pressed');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                onPress={headerButtonPressHandler} 
                icon="star"
                color="white"
                />
            }
        });
    }, [navigation, headerButtonPressHandler]);

    return <ScrollView style={styles.rootCotainer}>
        <Image
            source={{ uri: selectedMeal.imageUrl }}
            style={styles.image}
        />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            textStyle={styles.detailText}
        />
        <View style={styles.titleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
        </View>

        <View style={styles.subText}>
            {selectedMeal.ingredients.map(ingredient => (
                <Text style={styles.text1} key={ingredient} >{ingredient}</Text>))}
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
        </View>

        <View style={styles.subText}>
            {selectedMeal.steps.map(steps => (
                <Text style={styles.text2} key={steps} >{steps}</Text>))}
        </View>

    </ScrollView>
}

const styles = StyleSheet.create({
    rootCotainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
    },
    titleContainer: {
        padding: 6,
        margin: 4,
        marginVertical: 4,
        marginHorizontal: 24,
        borderBottomWidth: 2,
        bordeBottomColor: 'gray',
        borderBottomWidth: 2
    },
    detailText: {
        color: 'black'
    },
    subtitle: {
        color: '#2c3e50',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 6,
    },
    text1: {
        margin: 8,
        fontSize: 16,
        color: '#34495e'
    },
    text2: {
        margin: 5,
        fontSize: 16,
        color: '#34495e'
    },
    subText: {
        padding: 18,
    }
});
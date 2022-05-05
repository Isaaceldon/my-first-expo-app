import React, { PureComponent } from 'react';
import { View,Text,Image,StyleSheet,FlatList, SafeAreaView, ScrollView } from "react-native";
import SingleCertificat from './SingleCertificat'



 const certifications = [

{
    id: 1,
    libelle: "Apprenez à créer votre site web avec HTML5 et CSS3",
    structure: "OpenClassroom",
    images: require('../assets/img/certificats/certificats-image/html-css-Open.png')
},
{
    id: 2,
    libelle: "Gérez du code avec Git et GitHub",
    structure: "OpenClassroom",
    images: require('../assets/img/certificats/certificats-image/certificat-github-Open.png')
},
{
    id: 3,
    libelle: "Administrez vos bases de données avec MySQL",
    structure: "OpenClassroom",
    images: require('../assets/img/certificats/certificats-image/certificat-base-donne-mysql-Open.png')
},
{
    id: 4,
    libelle: "Apprenez les bases du langage Python",
    structure: "OpenClassroom",
    images: require('../assets/img/certificats/certificats-image/certificat-bas-python-Open.png')
},
{
    id: 5,
    libelle: "Créez des sites web responsive avec Bootstrap 4",
    structure: "OpenClassroom",
    images: require('../assets/img/certificats/certificats-image/certificat-bootstrap-Open.png')
 },
// {
//     id: 6,
//     libelle: "Architecture et Maintenance des Systèmes Mobiles",
//     structure: "PSM(Point Service Mobiles)",
//     images: require('../assets/img/certificats/certificats-image/idevice-PSM.png')
// },
// {
//     id: 7,
//     libelle: "Objectif IA : initiez-vous à l'intelligence artificielle",
//     structure: "OpenClassroom",
//     images: require('../assets/img/certificats/certificats-image/IA-Open.png')
// },
// {
//     id: 8,
//     libelle: "Basic web development with HTML,CSS,JS ",
//     structure: "Bootcamp with ShapeAI",
//     images: require('../assets/img/certificats/certificats-image/html-css-js-ShapeAi.png')
// },
// {
//     id: 9,
//     libelle: "Apprenez à programmer en Java",
//     structure: "OpenClassroom",
//     images: require('../assets/img/certificats/certificats-image/java-Open.png')
// },
// {
//     id: 10,
//     libelle: "Écrivez du JavaScript pour le web",
//     structure: "OpenClassroom",
//     images: require('../assets/img/certificats/certificats-image/java-script-web-Open.png')
// },
// {
//     id: 11,
//     libelle: "Apprenez à programmer avec JavaScript",
//     structure: "OpenClassroom",
//     images: require('../assets/img/certificats/certificats-image/java-script-programmation-Open.png')
// },
// {
//     id: 12,
//     libelle: "Développez des sites web avec Java EE",
//     structure: "OpenClassroom",
//     images: require('../assets/img/certificats/certificats-image/JEE-Open.png')
// },
// {
//     id: 13,
//     libelle: "Découvrez le framework PHP Laravel ",
//     structure: "OpenClassroom",
//     images: require('../assets/img/certificats/certificats-image/laravel-Open.png')
// },
// {
//     id: 14,
//     libelle: "Concevez votre site web avec PHP et MySQL",
//     structure: "OpenClassroom",
//     images: require('../assets/img/certificats/certificats-image/php-mysql-Open.png')
// },
// {
//     id: 15,
//     libelle: "Compétences pour l'Employabilité",
//     structure: "African Virtual University",
//     images: require('../assets/img/certificats/certificats-image/employabilité.png')
// },
// {
//     id: 16,
//     libelle: "Créez une application web avec Vue.js",
//     structure: "OpenClassroom",
//     images: require('../assets/img/certificats/certificats-image/vuejs-Open.png')
// },
// {
//     id: 17,
//     libelle: "CSS Course",
//     structure: "SOLOLEARN",
//     images: require('../assets/img/certificats/certificats-image/css certificat-sololearn.jpg')
// },
// {
//     id: 18,
//     libelle: "HTML Course",
//     structure: "SOLOLEARN",
//     images: require('../assets/img/certificats/certificats-image/html certificat-sololearn.jpg')
// },
// {
//     id: 19,
//     libelle: "Theoretical and practical understanding of Java Script",
//     structure: "SOLOLEARN",
//     images: require('../assets/img/certificats/certificats-image/javascript certificat-sololearn.png')
// },
// {
//     id: 20,
//     libelle: "PHP Course",
//     structure: "SOLOLEARN",
//     images: require('../assets/img/certificats/certificats-image/php-sololearn.jpg')
// },
// {
//     id: 21,
//     libelle: "Responsive web Design Course",
//     structure: "SOLOLEARN",
//     images: require('../assets/img/certificats/certificats-image/responsive website certificat-sololearn.jpg')
// },
// {
//     id: 22,
//     libelle: "Theoretical and practical understanding of SQL",
//     structure: "SOLOLEARN",
//     images: require('../assets/img/certificats/certificats-image/sql certficat-sololearn.png')
// },
// {
//     id: 23,
//     libelle: "Introducing Coding for Beginners: an HTML and CSS",
//     structure: "BitDegree Foundation VSI",
//     images: require('../assets/img/certificats/certificats-image/html-betdegree.png')
// },
// {
//     id: 24,
//     libelle: "Web Application Development",
//     structure: "Agence Web Marina",
//     images: require('../assets/img/certificats/certificats-image/attestation-stage-académique.png')
// },
// {
//     id: 25,
//     libelle: "Utilisez Git et GitHub pour vos projets de développement",
//     structure: "OpenClassroom",
//     images: require('../assets/img/certificats/certificats-image/git-github-project-dev-Open.png')
// },
];

export default function Certificats({navigation}) {

    const renderItem = ({ item }) => (
        <SingleCertificat
                img={item.images}
                structure={item.structure}
                libelle={item.libelle}
          />
      );

    return(
        <ScrollView>
        <SafeAreaView  style={styles.certificats}>
            <Text>All certifications</Text>
          
           <FlatList
            keyExtractor={(item)=>item.id}
            data={certifications}
            renderItem={renderItem}
            />
          
        </SafeAreaView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    certificats:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "teal",
    }
})
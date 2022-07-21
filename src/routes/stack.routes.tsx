import { Home } from "../screens/Home/Home";
import { createStackNavigator } from "@react-navigation/stack"
import { Vermes } from "../screens/Vermes/Vermes";
import { Question } from "../screens/Question/Question";
import { Credits } from "../screens/Credits/Credits";
import { Glossario } from "../screens/Glossario/Glossario";
import { Verme } from "../screens/Verme/Verme";
const Stack = createStackNavigator();

export const StackRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{ headerTitle: "Pagina Inicial" }} />
            <Stack.Screen name="vermes" component={Vermes} options={{ headerTitle: "Lista de Verminoses" }} />
            <Stack.Screen name="question" component={Question} options={{ headerTitle: "Questões Problematizadora" }} />
            <Stack.Screen name="credits" component={Credits} options={{ headerTitle: "Creditos" }} />
            <Stack.Screen name="verme" component={Verme} options={{ headerShown: false }} />
            <Stack.Screen name="glossario" component={Glossario} options={{headerTitle: "Glossario parasitológico"}} />
        </Stack.Navigator>
    )
}
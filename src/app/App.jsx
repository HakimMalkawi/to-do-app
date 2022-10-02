import { ThemeProvider } from "../context/ThemeContext"
import { TaskProvider } from "../context/TaskContext"
import Layout from "../layout/Layout"
import "./app.css"

const App = () =>
    <ThemeProvider>
        <TaskProvider>
            <Layout />
        </TaskProvider>
    </ThemeProvider>

export default App
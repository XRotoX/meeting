import CssBaseline from '@mui/material/CssBaseline'
import BoardContainer from './components/Board'
import MeetingStepper from "./components/Stepper"



export default function App() {
  return (
    <div>
      <BoardContainer>
        <CssBaseline />
        <MeetingStepper />
      </BoardContainer>
    </div>
  )
}


import {useState} from 'react'
import './App.css'
import Video from "./Video/Video.jsx";
import {VIDEOS} from "./videos.js";
import Counter from "./Tasks/Counter.jsx";
import ToggleText from "./Tasks/ToggleText.jsx";
import ThemeSwitcher from "./Tasks/ThemeSwitcher.jsx";
import './Tasks/Tasks.css'
import InputMirror from "./Tasks/InputMirror.jsx";
import FullNameForm from "./Tasks/FullNameForm.jsx";
import ShowDetails from "./Tasks/ShowDetails.jsx";
import TodoList from "./Tasks/ToDoList.jsx";
import RemovableTodoList from "./Tasks/RemovableToDoList.jsx";
import MultiCounter from "./Tasks/MultiCounter.jsx";
import EmailForm from "./Tasks/EmailForm.jsx";
import Input from "./Tasks/Input/Input.jsx";
import PageTitleCounter from "./Tasks/PageTitleCounter/PageTitleCounter.jsx";
import AutoTimer from "./Tasks/AutoTimer/AutoTimer.jsx";
import OnlineStatus from "./Tasks/OnlineStatus/OnlineStatus.jsx";
import UsersList from "./Tasks/UserList/UserList.jsx";
import SearchableUsers from "./Tasks/SearchableUsers/SearchableUsers.jsx";
import WindowSize from "./Tasks/WindowSize/WindowSize.jsx";
import GreetingDelay from "./Tasks/GreetingDelay/GreetingDelay.jsx";
import FakePage from "./Tasks/FakePage/FakePage.jsx";

function App() {

    return (
        <>
            {/*<div className='video-container'>*/}

            {/*    {*/}
            {/*        VIDEOS.map((video) => (*/}
            {/*            <Video key={video.id} title={video.title} channelName={video.channelName} img={video.img}/>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</div>*/}
            {/*<Counter/>*/}
            {/*<ToggleText/>*/}
            {/*<ThemeSwitcher/>*/}
            {/*<InputMirror/>*/}
            {/*<FullNameForm/>*/}
            {/*<ShowDetails/>*/}
            {/*<TodoList/>*/}
            {/*<RemovableTodoList/>*/}
            {/*<MultiCounter/>*/}
            {/*<EmailForm/>*/}
            <Input/>
            <br/>
            <PageTitleCounter/>
            <br/>
            <AutoTimer/>
            <br/>
            <OnlineStatus/>
            <br/>
            <UsersList/>
            <br/>
            <SearchableUsers/>
            <br/>
            <WindowSize/>
            <br/>
            <GreetingDelay/>
            <br/>
            <FakePage/>
        </>

    )
}

export default App

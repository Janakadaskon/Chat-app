import{ PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = () => {
    return(
        <div style={{height: '100vh'}}>
            <PrettyChatWindow 
                projectId=''
                username=''
                secret=''
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage
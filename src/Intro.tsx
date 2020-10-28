import React, {FC} from 'react'

type Props = {
    title: string
}

const Intro: FC<Props> = (props) => {
    return (
        <>
            {/* TODO: this is a comment in JSX */}
            <h1>{props.title}</h1>
            <p>Never Stop Learning!</p>
        </>
    )
}

export default Intro

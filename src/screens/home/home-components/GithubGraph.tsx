import React from 'react';
import { useMantineColorScheme } from "@mantine/core";
import GitHubCalendar from "react-github-calendar";


export default function GithubGraph(){
    const {colorScheme} = useMantineColorScheme();
    const isDark = colorScheme === 'dark';

    const calendarStyles: React.CSSProperties = {
        backgroundColor: 'transparent',
        maxWidth: '100%',
        overflowX: 'auto',
        marginBottom: '64px',
    };

    return(
        <div style={calendarStyles}>
            <GitHubCalendar
                username={'syedashar129'}
                colorScheme={isDark ? 'dark' : 'light'}
                blockSize={15}
                blockMargin={5}
                fontSize={14}
            />
        </div>
    )

}

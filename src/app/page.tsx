
import React from 'react'
import { getAllIssue } from "@/actions/githubIssue"
import { IssueCoverCard } from "@/components/blocks/IssueCoverCard"
import {UserProvider} from "@/Providers/UserProvider"
import {GithubUserModelProps} from "@/models/IssueModel";
import {IssueDisplayList} from "@/components/blocks/client/IssueDisplayList";
import {NavBar} from "@/components/blocks/client/NavBar";

export default async function Home() {

    const fetchRes = await getAllIssue()

    return (
        <div className={"p-6"}>
            <div className={"w-full h-48 rounded-xl flex flex-col justify-center items-center gap-y-5"}>
                {/*<p test className="text-xl font-bold">Quan 的 Blog</p>*/}
                <p id={"welcome-message"} className={"text-sm font-light flex flex-col justify-center items-center"}>
                    <span>Blog Builder Default Template</span>
                    <span className={"text-sm font-extralight"}> power by Github Builder & Github Issue</span>
                </p>
            </div>
            <IssueDisplayList issueData={fetchRes.data} nextURL={fetchRes.next}/>
        </div>
    )
}


import React from 'react'
import { getAllIssue } from "@/actions/githubIssue";
import { IssueCoverCard } from "@/components/blocks/IssueCoverCard";
import { EditPostButton } from "@/components/blocks/client/EditPostButton";
import {getTokenFromCookie, getGithubUser} from "@/actions/githubOauth";
import {GithubUserModelProps} from "@/models/IssueModel";

export default async function Home() {

    const issueList = await getAllIssue()
    const token = await getTokenFromCookie()

    let user: GithubUserModelProps | null = null

    if(token !==undefined && token.length > 0){
        user = await getGithubUser()
    }

    return (
        <div className={"p-6"}>
            {
                user !== null  ?
                    <div className={"fixed bottom-12 right-12 "}>
                        <EditPostButton creator={user} />
                    </div> : null
            }
            <div className={"w-full h-48 rounded-xl flex flex-col justify-center items-center gap-y-5"}>
                <p className="text-xl font-bold">Quan 的 Blog</p>
                <p className={"text-sm font-light flex flex-col justify-center items-center"}>
                    <span>Welcome to Quan 的 Blog 順便當作 Dcard 2024 實習 Intern Demo</span>
                    <span className={"text-sm font-extralight"}> power by Github Issue</span>
                </p>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 py-4"}>
                {
                    issueList.map((issue) => {
                        return (
                            <IssueCoverCard key={issue.id} issue={issue}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

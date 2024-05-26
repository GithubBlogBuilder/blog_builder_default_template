import {getIssueById} from "@/actions/githubIssue";
import {getAllIssueComments} from "@/actions/githubComments";
import {BlogPostHeader, IssueCoverCard} from "@/components/blocks/IssueCoverCard";
import {GithubUserModelProps, issueDataModelProps, IssueModel} from "@/models/IssueModel";
import React from "react";
import {CommentDisplayCard} from "@/components/blocks/CommentDisplayCard";
import {NewCommentForm} from "@/components/blocks/client/NewCommentForm";
import {MarkdownDisplay} from "@/components/blocks/MarkdownDisplay"
import {IssueEntity} from "@/models/IssueModel"

export default async function PostPage({params}: { params: { issueNumber: string } }) {

    const issue = await getIssueById({issueId: parseInt(params.issueNumber)})
    const comments = await getAllIssueComments({issueId: parseInt(params.issueNumber)})

    const sortedList = comments.sort((a, b) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    })

    const issueModel = new IssueModel(issue)

    return (
        <div>
            <BlogPostHeader issueData={issue}></BlogPostHeader>
            <MarkdownDisplay source={issueModel.metadata.body}/>
            <div className={"w-full space-y-4 py-4"}>
            <div className={"text-lg font-semibold"}>留言區</div>
                <div className={"text-sm"}> {comments.length > 0 ? "" : "此貼文還沒有留言，趕快登入後留言吧！！！"} </div>
                <NewCommentForm issueId={issue.number}/>
                {
                    sortedList.map((data) => {
                        return (
                            <CommentDisplayCard key={data.id} commentData={data}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

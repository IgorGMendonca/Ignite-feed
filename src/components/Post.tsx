import styles from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'

import { ArrowRight } from "phosphor-react";
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { ChangeEvent, FormEvent, useState } from 'react';


interface Content {
    type: 'paragraph' | 'link' | string;
    content: string;
}

interface PostProps {
    author: {
        name: string;
        role: string;
        avatarUrl: string;
    };
    publishedAt: Date;
    content: Content[];
}

export function Post({ author, publishedAt, content }: PostProps) {

    const [comments, setComments] = useState([''])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm:ss", {
        locale: ptBr
    })

    const publishedDateRelative = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment != commentToDelete
        })

        setComments(commentsWithoutDeleteOne)
    }

    const isCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelative}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if (item.type === 'paragraph') {
                        return (
                            <p key={item.content}>{item.content}</p>
                        )
                    } else if (item.type === 'link') {
                        return (
                            <p key={item.content}>
                                <a href='https://github.com/IgorGMendonca/ignite-feed' target="_blank"><ArrowRight size={14} className={styles.arrow} /> {item.content}</a>
                            </p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong >Deixe seu comentário</strong>

                <textarea
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    name='comment'
                    onChange={handleNewComment}
                    required
                />

                <footer>
                    <button type='submit' disabled={isCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(item => {
                    return (
                        <Comment key={item} comment={item} onDeleteComment={deleteComment} />
                    )
                })}
            </div>
        </article>
    )
}
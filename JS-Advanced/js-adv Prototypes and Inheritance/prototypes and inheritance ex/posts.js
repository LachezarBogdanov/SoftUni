function solution (){

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            if(this.comments.length > 0) {
                let buff = '';
                buff += `Post: ${this.title}\n`
                buff += `Content: ${this.content}\n`
                buff += `Rating: ${this.likes - this.dislikes}\n`
                buff += `Comments:\n`
                this.comments.forEach(el => buff += ` * ${el}\n`);
                return buff.trim();
            } else {
                let buff = '';
                buff += `Post: ${this.title}\n`
                buff += `Content: ${this.content}\n`
                buff += `Rating: ${this.likes - this.dislikes}\n`
                return buff.trim();
            }
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            let buff = '';
           buff += `Post: ${this.title}\n`
            buff += `Content: ${this.content}\n`
            buff += `Views: ${this.views}\n`;
            return buff.trim();
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}
const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

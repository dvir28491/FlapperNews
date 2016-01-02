class CommentsController < ApplicationController

  before_action :find_post, only: [:create, :upvote]

  def create
    comment = @post.comments.create(comment_params)
    respond_with @post, comment
  end

  def upvote
    comment = @post.comment.find(params[:id])
    comment.increment!(:upvotes)
    respond_with @post, comment
  end

  private

  def find_post
    @post = Post.find(params[:post_id])
  end

  def comment_params
    params.require(:comment).permit(:body)
  end
end
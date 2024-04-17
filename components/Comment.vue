<template>
  <div class="p-4 rounded shadow-md">
    <h2 class="text-xl font-bold mb-4 text-white">Comments</h2>
    <div v-if="comments.length === 0" class="text-white">
      No comments yet. Be the first to comment!
    </div>
    <div v-else>
      <div
        v-for="(comment, index) in comments"
        :key="index"
        class="mb-4 bg-cyan-blue dark:bg-purple-500 rounded-[5px]"
      >
        <div class="flex items-center mb-2">
          <span class="font-semibold mr-2 text-white">{{
            comment.author
          }}</span>
          <span class="text-sm text-white">{{ formatDate(comment.date) }}</span>
        </div>
        <p class="text-white">{{ comment.text }}</p>
      </div>
    </div>
    <form @submit.prevent="addComment" class="mt-4">
      <div class="flex flex-col md:flex-row md:items-center">
        <textarea
          v-model.trim="newCommentText"
          placeholder="Add a comment..."
          class="w-full md:w-3/4 p-2 border rounded mb-2 md:mb-0 md:mr-2 bg-cyan-700 dark:bg-purple-400 text-white"
        ></textarea>
        <input
          v-model.trim="newCommentAuthor"
          type="text"
          placeholder="Your name"
          class="w-full md:w-1/4 p-2 border rounded bg-cyan-700 dark:bg-purple-400 text-white"
        />
      </div>
      <button
        type="submit"
        class="bg-cyan-700 dark:bg-purple-500 text-white font-semibold px-4 py-2 rounded mt-2 md:mt-[10px]"
      >
        Add Comment
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [],
      newCommentText: "",
      newCommentAuthor: "",
    };
  },
  methods: {
    addComment() {
      if (this.newCommentText && this.newCommentAuthor) {
        const newComment = {
          text: this.newCommentText,
          author: this.newCommentAuthor,
          date: new Date(),
        };
        this.comments.push(newComment);
        this.newCommentText = "";
        this.newCommentAuthor = "";
      } else {
        alert("Please enter your name and a comment.");
      }
    },
    formatDate(date) {
      return new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(date);
    },
  },
};
</script>

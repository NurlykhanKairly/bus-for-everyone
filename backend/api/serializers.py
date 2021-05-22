from rest_framework import serializers


# class BaseFeedbackSerializer(serializers.ModelSerializer):
#     movie =
#     like_count = serializers.SerializerMethodField('get_like_count')
#
#     class Meta:
#         model = Comment
#         fields = ('id', 'movie', 'created_by', 'created_at', 'content', 'like_count')
#         read_only_fields = ('id', 'created_by', 'created_at', 'like_count')
#
#     def get_like_count(self, comment):
#         return CommentLike.likes.get_comment_like(comment)

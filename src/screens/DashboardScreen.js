import React, { useEffect } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { Post } from "../components/Post";
import { UserBlogButton } from "../components/UserBlogButton";
import { dislikePost, getPosts, likePost } from "../actions/createBlog";
import { auth } from "../firebase/firebaseConfig";
import { colors } from "../constans/theme";
import { dashboardStyles } from "../styles";

const DashboardScreen = ({
    navigation,
    posts,
    isFetchingPosts,
    fetchPosts,
    addLike,
    dislikePost,
}) => {
    useEffect(() => {
        fetchPosts();
        navigation.addListener("focus", () => {
            fetchPosts();
        });
    }, [navigation]);

    const renderItem = ({ item }) => {
        return (
            <Post
                author={item.author}
                authorAvatar={item.authorAvatar}
                content={item.content}
                createdAt={item.createdAt}
                likes={item.likes}
                photo={item.photo}
                postId={item.id}
                likedBy={item.likedBy}
                authorUid={item.authorUid}
                addLike={addLike}
                dislikePost={dislikePost}
            />
        );
    };
    return (
        <View
            style={[
                dashboardStyles.dashboardContainer,
                { backgroundColor: colors.darkViolet },
            ]}
        >
            <UserBlogButton navigation={navigation} />
            {isFetchingPosts ? (
                <ActivityIndicator size="large" style={{ paddingTop: 120 }} />
            ) : (
                <FlatList
                    data={posts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View>
    );
};

function mapStateToProps(state) {
    return {
        posts: state.createBlog.posts,
        isFetchingPosts: state.createBlog.isFetchingPosts,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPosts: () => dispatch(getPosts()),
        addLike: (postId, likes, userId) =>
            dispatch(likePost(postId, likes, userId)),
        dislikePost: (postId, likes, userId) =>
            dispatch(dislikePost(postId, likes, userId)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

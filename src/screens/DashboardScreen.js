import React, { useEffect } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    const handleSignOut = async () => {
        await auth.signOut();
        await AsyncStorage.removeItem("logged");

        navigation.navigate("Signin");
    };
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
            <UserBlogButton navigation={navigation} signout={handleSignOut} />
            {isFetchingPosts ? (
                <ActivityIndicator size="large" style={{ paddingTop: 120 }} />
            ) : (
                <FlatList
                    data={posts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
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

import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildPaths} from "./types/config";

type buildPlugins = {
    paths: BuildPaths
}

export function buildPlugins ({ paths }:buildPlugins):webpack.WebpackPluginInstance[] {
    return[new HTMLWebpackPlugin({
        template: paths.html
    }), new webpack.ProgressPlugin()]
}
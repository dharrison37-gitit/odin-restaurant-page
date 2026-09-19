import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
};

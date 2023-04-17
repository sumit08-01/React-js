import React, { useState } from "react";
import SubChild from "./SubChild";

function Child() {
    return (
        <>
            <h2>This is a child component</h2>
            <hr />
            <SubChild />
        </>
    );
}
export default Child;
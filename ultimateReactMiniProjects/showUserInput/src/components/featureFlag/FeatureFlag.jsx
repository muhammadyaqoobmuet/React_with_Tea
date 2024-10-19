import React, { useContext } from "react";
import { AdvanceColorGenrator } from "../AdvanceColorGenrator/AdvanceColorGenrator";
import SuggestionToI from "../SuggestionsToInput/SuggestionToI";
import { ApiContext } from "./context/ApiContext";

function FeatureFlag() {
    const compToRender = [
        {
            key: "showColorGenrator",
            comp: <AdvanceColorGenrator />,
        },
        {
            key: "showSearching",
            comp: <SuggestionToI />,
        },
    ];

    const { loading, featureFlags } = useContext(ApiContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full h-screen bg-black">
            <h1 className="text-4xl text-center tracking-widest pt-5 text-yellow-700">
                FeatureFlag Implementation
            </h1>

            {compToRender.map((item) =>
                featureFlags[item.key] ? (
                    <React.Fragment key={item.key}>{item.comp}</React.Fragment>
                ) : null
            )}
        </div>
    );
}

export default FeatureFlag;
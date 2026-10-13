jsxs("div", {
    className: 
        "mx-20 mt-8 flex items-center justify-between rounded-x1 border-2 border-[#000000] bg-[#EEEEEE] p-6",
    children: [
        jsxs("div", {
            children: [
                jsx("h3", {
                    className: "text-2xl font-bold",
                    children: "Cloudline Enterprise is coming soon.",
                }),
        
                jsxs("p", {
                    className: "mt-1 text-xl",
                    children: [teams, " teams joined the waitlist."],
                }),   
            ],
        }),
        
        jsxs("div", {
            className: "flex gap-4",
            children: [
                jsx("button", {
                   className: 
                        "cursor-pointer rounded-lg bg-[#CB2957] px-8 py-3 text-xl font-bold text-[#EEEEEE]",
                    onClick: handleJoin,
                    children: "Join",
            }),
                jsx("button", {
                    className:
                        "cursor-pointer rounded-lg border-2 border-[#000000] px-8 py -3 text-xl font-bold",
                    onClick: handleClear,
                    children: "Clear",
                 }),
            ],
        }),  
    ],
});

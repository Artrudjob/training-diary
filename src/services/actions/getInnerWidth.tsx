const GET_INNER_WIDTH: "GET_INNER_WIDTH" = "GET_INNER_WIDTH";

interface IInnerWidth {
    readonly type: typeof GET_INNER_WIDTH;
    readonly ui: {
        width: number
    }
}

function getInnerWidth(innerWidth: number): IInnerWidth {
    return {
        type: GET_INNER_WIDTH,
        ui: {
            width: innerWidth
        }
    }
}

export { GET_INNER_WIDTH, getInnerWidth }

export type TInnerWidthAction = IInnerWidth;
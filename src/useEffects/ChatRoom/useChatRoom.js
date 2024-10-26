import { useEffect } from "react";
import { createConnection } from "./chat";

export function useChatRoom({ serverUrl, roomId }) {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        }
    }, [serverUrl, roomId])
}
"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function ClientPage() {
    const user = useCurrentUser();
    return <UserInfo label="💻 Client Component" user={user} />;
}

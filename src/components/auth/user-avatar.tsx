import { AvatarProps } from "@radix-ui/react-avatar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";

interface UserAvatarProps extends AvatarProps {
  user: {
    imageUrl: string;
    firstName?: string;
    userName?: string;
  };
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.imageUrl ? (
        <AvatarImage alt="Picture" src={user.imageUrl} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.firstName}</span>
          <Icons.user className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}

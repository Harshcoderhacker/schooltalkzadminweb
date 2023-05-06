import SchoolTalkzLogo from "@/assets/images/SchoolTalkzLogo";
import { getData } from "@/pages/api/axios";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import Link from "next/link";
import { useRouter } from "next/router";

type ProfileProp = {
  name: string;
  position: string;
  image: string;
};
const RenderProfile = ({ name, position, image }: ProfileProp) => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-end">
        <div className="font-bold">Welcome {name}</div>
        <div>{position}</div>
      </div>
      <img className="rounded-full h-10 w-10" src={image} />
    </div>
  );
};
const path: string = "/logout";

const RenderProfileMenu = (props: ProfileProp) => {
  const router = useRouter();
  const logout = async () => {
    let res = await getData({ path });
    console.log(res);
    router.push("/login");
  };
  return (
    <Menu
      menuButton={
        <MenuButton>
          <div className="w-max flex justify-between items-center font-open cursor-pointer">
            <RenderProfile {...props} />
          </div>
        </MenuButton>
      }
      transition
    >
      <MenuItem>
        <Link href="/profile" className="w-full h-max bg-white">
          Profile
        </Link>
      </MenuItem>
      <MenuItem>
        <div onClick={logout} className="w-full h-max">Log out</div>
      </MenuItem>
    </Menu>
  );
};

const Header = () => {
  return (
    <div className="bg-gradient-blue text-white flex justify-between items-center p-4">
      <div>
        <SchoolTalkzLogo />
      </div>
      <div>
        {" "}
        <RenderProfileMenu
          name="School Talkz"
          position="SuperAdmin"
          image="https://i.pravatar.cc/300?img=20"
        />
      </div>
    </div>
  );
};

export default Header;

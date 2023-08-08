import { FC } from "react"
import { Tabs } from "../../components/Tabs";
import DefaultPanel from "./DefaultPanel";
import MenuPanel from "./MenuPanel";

const RegisterPage:FC = () => {
  
  return (
    <div className="container mx-auto">
      <h2>Rigister 各類使用</h2>
      <Tabs>
        <div className="flex">
          <Tabs.Tab label="default">Default</Tabs.Tab>
          <Tabs.Tab label="menu">菜單範例</Tabs.Tab>
        </div>
        <Tabs.Panel label="default">
          <DefaultPanel/>
        </Tabs.Panel>
        <Tabs.Panel label="menu">
          <MenuPanel/>
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}

export default RegisterPage

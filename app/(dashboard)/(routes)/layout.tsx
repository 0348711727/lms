import SideBar from "../_components/SideBar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-50">
                <SideBar />
            </div>
            {children}
        </div>
    )
}
export default DashboardLayout;
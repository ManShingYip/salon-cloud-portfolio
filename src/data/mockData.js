/**
 * Salon Cloud — Mock Data for Static Demo
 * 完全假資料，唔接觸 Supabase，純前端展示
 */
export const mockAppointments = [
  {
    id: 1,
    client_name: "陳小姐",
    member_id: "Y-00001",
    treatment: "深層清潔面部護理",
    time: "10:00",
    end_time: "11:30",
    staff: "Amy",
    room: "Room A",
    status: "confirmed",
    is_vip: true,
    is_sensitive: false,
  },
  {
    id: 2,
    client_name: "李太",
    member_id: "Y-00002",
    treatment: "膠原蛋白導入",
    time: "11:00",
    end_time: "12:00",
    staff: "Betty",
    room: "VIP 房",
    status: "attended",
    is_vip: false,
    is_sensitive: false,
  },
  {
    id: 3,
    client_name: "張小姐",
    member_id: "Y-00003",
    treatment: "激光去斑療程",
    time: "14:00",
    end_time: "15:30",
    staff: "Amy",
    room: "Room B",
    status: "confirmed",
    is_vip: false,
    is_sensitive: true,
  },
  {
    id: 4,
    client_name: "王太",
    member_id: "Y-00004",
    treatment: "深層清潔面部護理",
    time: "14:30",
    end_time: "16:00",
    staff: "Betty",
    room: "Room A",
    status: "cancelled",
    is_vip: false,
    is_sensitive: false,
  },
  {
    id: 5,
    client_name: "趙小姐",
    member_id: "Y-00005",
    treatment: "膠原蛋白導入",
    time: "16:00",
    end_time: "17:00",
    staff: "Amy",
    room: "Room B",
    status: "confirmed",
    is_vip: true,
    is_sensitive: false,
  },
];

export const mockClients = [
  { id: 1, name: "陳小姐", member_id: "Y-00001", phone: "****-1234", source: "IG廣告", is_sensitive: false, last_visit: "2026-06-20", total_spent: 12800 },
  { id: 2, name: "李太", member_id: "Y-00002", phone: "****-5678", source: "朋友介紹", is_sensitive: false, last_visit: "2026-06-19", total_spent: 5600 },
  { id: 3, name: "張小姐", member_id: "Y-00003", phone: "****-9012", source: "街客", is_sensitive: true, last_visit: "2026-06-18", total_spent: 23400 },
  { id: 4, name: "王太", member_id: "Y-00004", phone: "****-3456", source: "IG廣告", is_sensitive: false, last_visit: "2026-05-15", total_spent: 3200 },
  { id: 5, name: "趙小姐", member_id: "Y-00005", phone: "****-7890", source: "朋友介紹", is_sensitive: false, last_visit: "2026-06-21", total_spent: 18900 },
];

export const mockTreatments = [
  { id: 1, name: "深層清潔面部護理", category: "面部護理", single_price: 580, duration: 90, has_package: true, package_sessions: 10, package_price: 4800 },
  { id: 2, name: "膠原蛋白導入", category: "面部護理", single_price: 880, duration: 60, has_package: true, package_sessions: 6, package_price: 4200 },
  { id: 3, name: "激光去斑療程", category: "光學療程", single_price: 1200, duration: 90, has_package: true, package_sessions: 5, package_price: 5000 },
  { id: 4, name: "背部推油", category: "身體護理", single_price: 480, duration: 60, has_package: false, package_sessions: 0, package_price: 0 },
  { id: 5, name: "香薰按摩", category: "身體護理", single_price: 680, duration: 90, has_package: true, package_sessions: 8, package_price: 4500 },
];

export const mockDashboardStats = {
  today_appointments: 8,
  today_revenue: 6800,
  this_month_revenue: 128500,
  active_clients: 156,
  dormant_clients: 12,
  buffer_count: 23,
  buffer_amount: 45000,
  confirmed_revenue: 83500,
};

export const mockPaymentMethods = ["現金", "信用卡", "轉賬", "PayMe", "AlipayHK"];

export const mockRooms = ["Room A", "Room B", "VIP 房"];
export const mockStaff = [
  { id: 1, name: "Amy", role: "美容師", status: "active" },
  { id: 2, name: "Betty", role: "美容師", status: "active" },
  { id: 3, name: "Cathy", role: "美容師", status: "inactive" },
];

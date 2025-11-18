// --- Mock Data ---
export const data = [
    { id: 1, date: '2025-10-24', username: 'John Doe', text: 'Submitted new maintenance request for Apt 5B. Details: Leaky faucet in kitchen sink.', read: false, type: 'maintenance' },
    { id: 2, date: '2025-10-23', username: 'Sara Lim', text: 'Payment of $700 received for Green Villa (Ref: INV-00123).', read: true, type: 'payment' },
    { id: 3, date: '2025-10-22', username: 'System', text: 'Contract for Mike Johnson (Studio 101) is expiring in 30 days on 2025-11-21.', read: false, type: 'contract' },
    { id: 4, date: '2025-10-22', username: 'Alice Chen', text: 'Payment of $300 is overdue for Room 4B. Sent 1st reminder.', read: false, type: 'payment' },
    { id: 5, date: '2025-10-21', username: 'Admin User', text: 'Maintenance MNT-003 (Hallway light) marked as Completed by staff.', read: true, type: 'maintenance' }
];

// --- Helper Function ---
export function getNotificationIcon(type) {
    switch (type) {
        case 'maintenance': return '🔧';
        case 'payment': return '💰';
        case 'contract': return '🧾';
        default: return '';
    }
}
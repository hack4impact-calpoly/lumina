type Timestamp = {
    seconds: number,
    nanoseconds: number
}

export type Announcement = {
    id: string,
    title: string,
    body: string,
    timestamp: Timestamp
}
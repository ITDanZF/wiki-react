export enum RouterPath {
    // 首页
    HOME = "/",
    // 登录
    LOGIN = "/login",
    // 注册
    REGISTER = "/register",
    // 问卷列表
    LIST = "/manage/list",
    // 收藏问卷
    STAR = "/manage/star",
    // 回收站
    TRASH = "/manage/trash",
    // 编辑问卷
    EDIT = "/question/edit/:id",
    // 问卷统计
    STATISTICS = "/question/statistics/:id",
}
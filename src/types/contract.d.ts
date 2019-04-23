export interface IContractBody {
    Contract: {
        ExchangeNo: string
        CommodityNo: string
        ContractNo: string
    }
    CurrencyNo: string // 币种编号
    TradingState: number // 交易状态 1.集合竞价 2.集合竞价撮合 3.连续交易 4.交易暂停 5.闭市
    DateTimeStamp: string // 时间戳
    QPreClosingPrice: number // 昨收盘价
    QPreSettlePrice: number // 昨结算价
    QPrePositionQty: number // 昨持仓量
    QOpeningPrice: number // 开盘价
    QLastPrice: number // 最新价
    QHighPrice: number // 最高价
    QLowPrice: number // 最低价
    QLimitUpPrice: number // 涨停价
    QLimitDownPrice: number // 跌停价
    QTotalQty: number // 当日成交总量
    QTotalTurnover: number // 当日成交金额
    QPositionQty: number // 持仓量
    QAveragePrice: number // 均价
    QClosingPrice: number // 收盘价
    QSettlePrice: number // 结算价
    QLastQty: number // 最新交易量
    QBidPrice: number[] // 买价集合（10档）
    QBidQty: number[] // 买量集合（10档）
    QAskPrice: number[] // 卖价集合（10档）
    QAskQty: number[] // 卖量集合（10档）
    QTurnoverRate: number // 换手率
    QChangeValue: number // 涨跌值
}

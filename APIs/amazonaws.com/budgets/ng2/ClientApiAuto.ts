import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace My_Demo_Client {

	/** Request of CreateBudget  */
	export interface CreateBudgetRequest {

		/**
		 * The account ID of the user. It should be a 12-digit number.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: \d{12}
		 */
		AccountId: string;

		/**<p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the ARN pattern for a budget: </p> <p> <code>arn:aws:budgetservice::AccountId:budget/budgetName</code> </p> */
		Budget: Budget;

		/**
		 * A list of notifications, each with a list of subscribers.
		 * Maximum items: 5
		 */
		NotificationsWithSubscribers?: Array<NotificationWithSubscribers>;
	}


	/** Request of CreateNotification  */
	export interface CreateNotificationRequest {

		/**
		 * The account ID of the user. It should be a 12-digit number.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: \d{12}
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [^:\\]+
		 */
		BudgetName: string;

		/**<p>A notification that is associated with a budget. A budget can have up to five notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul> */
		Notification: Notification;

		/**
		 * A list of subscribers.
		 * Minimum items: 1
		 * Maximum items: 11
		 */
		Subscribers: Array<Subscriber>;
	}


	/** Request of CreateSubscriber  */
	export interface CreateSubscriberRequest {

		/**
		 * The account ID of the user. It should be a 12-digit number.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: \d{12}
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [^:\\]+
		 */
		BudgetName: string;

		/**<p>A notification that is associated with a budget. A budget can have up to five notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul> */
		Notification: Notification;

		/**<p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p> <p>For example, an email subscriber would have the following parameters:</p> <ul> <li> <p>A <code>subscriptionType</code> of <code>EMAIL</code> </p> </li> <li> <p>An <code>address</code> of <code>example@example.com</code> </p> </li> </ul> */
		Subscriber: Subscriber;
	}


	/** Request of DeleteBudget  */
	export interface DeleteBudgetRequest {

		/**
		 * The account ID of the user. It should be a 12-digit number.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: \d{12}
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [^:\\]+
		 */
		BudgetName: string;
	}


	/** Request of DeleteNotification  */
	export interface DeleteNotificationRequest {

		/**
		 * The account ID of the user. It should be a 12-digit number.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: \d{12}
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [^:\\]+
		 */
		BudgetName: string;

		/**<p>A notification that is associated with a budget. A budget can have up to five notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul> */
		Notification: Notification;
	}


	/** Request of DeleteSubscriber  */
	export interface DeleteSubscriberRequest {

		/**
		 * The account ID of the user. It should be a 12-digit number.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: \d{12}
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [^:\\]+
		 */
		BudgetName: string;

		/**<p>A notification that is associated with a budget. A budget can have up to five notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul> */
		Notification: Notification;

		/**<p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p> <p>For example, an email subscriber would have the following parameters:</p> <ul> <li> <p>A <code>subscriptionType</code> of <code>EMAIL</code> </p> </li> <li> <p>An <code>address</code> of <code>example@example.com</code> </p> </li> </ul> */
		Subscriber: Subscriber;
	}


	/** Response of DescribeBudget  */
	export interface DescribeBudgetResponse {

		/**<p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the ARN pattern for a budget: </p> <p> <code>arn:aws:budgetservice::AccountId:budget/budgetName</code> </p> */
		Budget?: Budget;
	}


	/** Request of DescribeBudget  */
	export interface DescribeBudgetRequest {

		/**
		 * The account ID of the user. It should be a 12-digit number.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: \d{12}
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [^:\\]+
		 */
		BudgetName: string;
	}

	export interface DescribeBudgetPerformanceHistoryResponse {

		/**A history of the state of a budget at the end of the budget's specified time period. */
		BudgetPerformanceHistory?: BudgetPerformanceHistory;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 * Pattern: .*
		 */
		NextToken?: string;
	}

	export interface DescribeBudgetPerformanceHistoryRequest {

		/**
		 * The account ID of the user. It should be a 12-digit number.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: \d{12}
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [^:\\]+
		 */
		BudgetName: string;

		/**The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. */
		TimePeriod?: TimePeriod;

		/**
		 * An integer that represents how many entries a paginated response contains. The maximum is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 * Pattern: .*
		 */
		NextToken?: string;
	}


	/** Response of DescribeBudgets  */
	export interface DescribeBudgetsResponse {

		/**A list of budgets. */
		Budgets?: Array<Budget>;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 * Pattern: .*
		 */
		NextToken?: string;
	}


	/** Request of DescribeBudgets  */
	export interface DescribeBudgetsRequest {

		/**
		 * The account ID of the user. It should be a 12-digit number.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: \d{12}
		 */
		AccountId: string;

		/**
		 * An integer that represents how many entries a paginated response contains. The maximum is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 * Pattern: .*
		 */
		NextToken?: string;
	}


	/** Response of GetNotificationsForBudget  */
	export interface DescribeNotificationsForBudgetResponse {

		/**A list of notifications. */
		Notifications?: Array<Notification>;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 * Pattern: .*
		 */
		NextToken?: string;
	}


	/** Request of DescribeNotificationsForBudget  */
	export interface DescribeNotificationsForBudgetRequest {

		/**
		 * The account ID of the user. It should be a 12-digit number.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: \d{12}
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [^:\\]+
		 */
		BudgetName: string;

		/**
		 * An integer that represents how many entries a paginated response contains. The maximum is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 * Pattern: .*
		 */
		NextToken?: string;
	}


	/** Response of DescribeSubscribersForNotification  */
	export interface DescribeSubscribersForNotificationResponse {

		/**
		 * A list of subscribers.
		 * Minimum items: 1
		 * Maximum items: 11
		 */
		Subscribers?: Array<Subscriber>;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 * Pattern: .*
		 */
		NextToken?: string;
	}


	/** Request of DescribeSubscribersForNotification  */
	export interface DescribeSubscribersForNotificationRequest {

		/**
		 * The account ID of the user. It should be a 12-digit number.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: \d{12}
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [^:\\]+
		 */
		BudgetName: string;

		/**<p>A notification that is associated with a budget. A budget can have up to five notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul> */
		Notification: Notification;

		/**
		 * An integer that represents how many entries a paginated response contains. The maximum is 100.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number;

		/**
		 * A generic string.
		 * Max length: 2147483647
		 * Min length: 0
		 * Pattern: .*
		 */
		NextToken?: string;
	}


	/** Request of UpdateBudget  */
	export interface UpdateBudgetRequest {

		/**
		 * The account ID of the user. It should be a 12-digit number.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: \d{12}
		 */
		AccountId: string;

		/**<p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the ARN pattern for a budget: </p> <p> <code>arn:aws:budgetservice::AccountId:budget/budgetName</code> </p> */
		NewBudget: Budget;
	}


	/** Request of UpdateNotification  */
	export interface UpdateNotificationRequest {

		/**
		 * The account ID of the user. It should be a 12-digit number.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: \d{12}
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [^:\\]+
		 */
		BudgetName: string;

		/**<p>A notification that is associated with a budget. A budget can have up to five notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul> */
		OldNotification: Notification;

		/**<p>A notification that is associated with a budget. A budget can have up to five notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul> */
		NewNotification: Notification;
	}


	/** Request of UpdateSubscriber  */
	export interface UpdateSubscriberRequest {

		/**
		 * The account ID of the user. It should be a 12-digit number.
		 * Max length: 12
		 * Min length: 12
		 * Pattern: \d{12}
		 */
		AccountId: string;

		/**
		 * A string that represents the budget name. The ":" and "\" characters aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [^:\\]+
		 */
		BudgetName: string;

		/**<p>A notification that is associated with a budget. A budget can have up to five notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul> */
		Notification: Notification;

		/**<p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p> <p>For example, an email subscriber would have the following parameters:</p> <ul> <li> <p>A <code>subscriptionType</code> of <code>EMAIL</code> </p> </li> <li> <p>An <code>address</code> of <code>example@example.com</code> </p> </li> </ul> */
		OldSubscriber: Subscriber;

		/**<p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p> <p>For example, an email subscriber would have the following parameters:</p> <ul> <li> <p>A <code>subscriptionType</code> of <code>EMAIL</code> </p> </li> <li> <p>An <code>address</code> of <code>example@example.com</code> </p> </li> </ul> */
		NewSubscriber: Subscriber;
	}


	/**<p>The amount of cost or usage that is measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage would have the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul> */
	export interface Spend {

		/**
		 * A string that represents a numeric value.
		 * Max length: 2147483647
		 * Min length: 1
		 * Pattern: ([0-9]*\.)?[0-9]+
		 */
		Amount: string;

		/**
		 * A string that represents the spend unit of a budget. It can't be null or empty.
		 * Max length: 2147483647
		 * Min length: 1
		 * Pattern: .*
		 */
		Unit: string;
	}


	/**<p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, and <code>RI_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p> */
	export interface CostTypes {
		IncludeTax?: boolean;
		IncludeSubscription?: boolean;
		UseBlended?: boolean;
		IncludeRefund?: boolean;
		IncludeCredit?: boolean;
		IncludeUpfront?: boolean;
		IncludeRecurring?: boolean;
		IncludeOtherSubscription?: boolean;
		IncludeSupport?: boolean;
		IncludeDiscount?: boolean;
		UseAmortized?: boolean;
	}


	/** The time unit of the budget, such as MONTHLY or QUARTERLY. */
	export enum TimeUnit { DAILY = 0, MONTHLY = 1, QUARTERLY = 2, ANNUALLY = 3 }


	/**The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date.  */
	export interface TimePeriod {

		/**A generic time stamp. In Java, it is transformed to a <code>Date</code> object. */
		Start?: Date;

		/**A generic time stamp. In Java, it is transformed to a <code>Date</code> object. */
		End?: Date;
	}


	/**<p>The spend objects that are associated with this budget. The <code>actualSpend</code> tracks how much you've used, cost, usage, or RI units, and the <code>forecastedSpend</code> tracks how much you are predicted to spend if your current usage remains steady.</p> <p>For example, if it is the 20th of the month and you have spent <code>50</code> dollars on Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your <code>forecastedSpend</code> is <code>75 USD</code>.</p> */
	export interface CalculatedSpend {

		/**<p>The amount of cost or usage that is measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage would have the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul> */
		ActualSpend: Spend;

		/**<p>The amount of cost or usage that is measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage would have the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul> */
		ForecastedSpend?: Spend;
	}


	/**<p> The type of a budget. It must be one of the following types: </p> <p> <code>COST</code>, <code>USAGE</code>, <code>RI_UTILIZATION</code>, or <code>RI_COVERAGE</code>.</p> */
	export enum BudgetType { USAGE = 0, COST = 1, RI_UTILIZATION = 2, RI_COVERAGE = 3, SAVINGS_PLANS_UTILIZATION = 4, SAVINGS_PLANS_COVERAGE = 5 }


	/**<p>Represents the output of the <code>CreateBudget</code> operation. The content consists of the detailed metadata and data file information, and the current status of the <code>budget</code> object.</p> <p>This is the ARN pattern for a budget: </p> <p> <code>arn:aws:budgetservice::AccountId:budget/budgetName</code> </p> */
	export interface Budget {

		/**
		 * A string that represents the budget name. The ":" and "\" characters aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [^:\\]+
		 */
		BudgetName: string;

		/**<p>The amount of cost or usage that is measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage would have the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul> */
		BudgetLimit?: Spend;
		PlannedBudgetLimits?: PlannedBudgetLimits;

		/**A map that represents the cost filters that are applied to the budget. */
		CostFilters?: CostFilters;

		/**<p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, and <code>RI_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p> */
		CostTypes?: CostTypes;

		/**The time unit of the budget, such as MONTHLY or QUARTERLY. */
		TimeUnit: BudgetTimeUnit;

		/**The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. */
		TimePeriod?: TimePeriod;

		/**<p>The spend objects that are associated with this budget. The <code>actualSpend</code> tracks how much you've used, cost, usage, or RI units, and the <code>forecastedSpend</code> tracks how much you are predicted to spend if your current usage remains steady.</p> <p>For example, if it is the 20th of the month and you have spent <code>50</code> dollars on Amazon EC2, your <code>actualSpend</code> is <code>50 USD</code>, and your <code>forecastedSpend</code> is <code>75 USD</code>.</p> */
		CalculatedSpend?: CalculatedSpend;

		/**<p> The type of a budget. It must be one of the following types: </p> <p> <code>COST</code>, <code>USAGE</code>, <code>RI_UTILIZATION</code>, or <code>RI_COVERAGE</code>.</p> */
		BudgetType: BudgetBudgetType;

		/**A generic time stamp. In Java, it is transformed to a <code>Date</code> object. */
		LastUpdatedTime?: Date;
	}

	export enum BudgetTimeUnit { DAILY = 0, MONTHLY = 1, QUARTERLY = 2, ANNUALLY = 3 }

	export enum BudgetBudgetType { USAGE = 0, COST = 1, RI_UTILIZATION = 2, RI_COVERAGE = 3, SAVINGS_PLANS_UTILIZATION = 4, SAVINGS_PLANS_COVERAGE = 5 }


	/**A history of the state of a budget at the end of the budget's specified time period. */
	export interface BudgetPerformanceHistory {

		/**
		 * A string that represents the budget name. The ":" and "\" characters aren't allowed.
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [^:\\]+
		 */
		BudgetName?: string;

		/**<p> The type of a budget. It must be one of the following types: </p> <p> <code>COST</code>, <code>USAGE</code>, <code>RI_UTILIZATION</code>, or <code>RI_COVERAGE</code>.</p> */
		BudgetType?: BudgetPerformanceHistoryBudgetType;

		/**A map that represents the cost filters that are applied to the budget. */
		CostFilters?: CostFilters;

		/**<p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, and <code>RI_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p> */
		CostTypes?: CostTypes;

		/**The time unit of the budget, such as MONTHLY or QUARTERLY. */
		TimeUnit?: BudgetPerformanceHistoryTimeUnit;
		BudgetedAndActualAmountsList?: Array<BudgetedAndActualAmounts>;
	}

	export enum BudgetPerformanceHistoryBudgetType { USAGE = 0, COST = 1, RI_UTILIZATION = 2, RI_COVERAGE = 3, SAVINGS_PLANS_UTILIZATION = 4, SAVINGS_PLANS_COVERAGE = 5 }

	export enum BudgetPerformanceHistoryTimeUnit { DAILY = 0, MONTHLY = 1, QUARTERLY = 2, ANNUALLY = 3 }


	/**The amount of cost or usage that you created the budget for, compared to your actual costs or usage. */
	export interface BudgetedAndActualAmounts {

		/**<p>The amount of cost or usage that is measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage would have the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul> */
		BudgetedAmount?: Spend;

		/**<p>The amount of cost or usage that is measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage would have the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul> */
		ActualAmount?: Spend;

		/**The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date. */
		TimePeriod?: TimePeriod;
	}


	/**<p> The comparison operator of a notification. Currently the service supports the following operators:</p> <p> <code>GREATER_THAN</code>, <code>LESS_THAN</code>, <code>EQUAL_TO</code> </p> */
	export enum ComparisonOperator { GREATER_THAN = 0, LESS_THAN = 1, EQUAL_TO = 2 }


	/**<p>A notification that is associated with a budget. A budget can have up to five notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul> */
	export interface Notification {

		/**The type of a notification. It must be ACTUAL or FORECASTED. */
		NotificationType: NotificationNotificationType;

		/**<p> The comparison operator of a notification. Currently the service supports the following operators:</p> <p> <code>GREATER_THAN</code>, <code>LESS_THAN</code>, <code>EQUAL_TO</code> </p> */
		ComparisonOperator: NotificationComparisonOperator;

		/**
		 * The threshold of a notification. It must be a number between 0 and 1,000,000,000.
		 * Minimum: 0
		 * Maximum: 1000000000
		 */
		Threshold: number;

		/**The type of threshold for a notification. It can be PERCENTAGE or ABSOLUTE_VALUE. */
		ThresholdType?: NotificationThresholdType;
		NotificationState?: NotificationNotificationState;
	}

	export enum NotificationNotificationType { ACTUAL = 0, FORECASTED = 1 }

	export enum NotificationComparisonOperator { GREATER_THAN = 0, LESS_THAN = 1, EQUAL_TO = 2 }

	export enum NotificationThresholdType { PERCENTAGE = 0, ABSOLUTE_VALUE = 1 }

	export enum NotificationNotificationState { OK = 0, ALARM = 1 }


	/**<p>The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.</p> <p>For example, an email subscriber would have the following parameters:</p> <ul> <li> <p>A <code>subscriptionType</code> of <code>EMAIL</code> </p> </li> <li> <p>An <code>address</code> of <code>example@example.com</code> </p> </li> </ul> */
	export interface Subscriber {

		/**The subscription type of the subscriber. It can be SMS or EMAIL. */
		SubscriptionType: SubscriberSubscriptionType;

		/**
		 * A string that contains an email address or SNS topic for the subscriber's address.
		 * Max length: 2147483647
		 * Min length: 1
		 * Pattern: (.*[\n\r\t\f\ ]?)*
		 */
		Address: string;
	}

	export enum SubscriberSubscriptionType { SNS = 0, EMAIL = 1 }


	/** The type of a notification. It must be ACTUAL or FORECASTED. */
	export enum NotificationType { ACTUAL = 0, FORECASTED = 1 }


	/** The type of threshold for a notification. It can be PERCENTAGE or ABSOLUTE_VALUE. */
	export enum ThresholdType { PERCENTAGE = 0, ABSOLUTE_VALUE = 1 }

	export enum NotificationState { OK = 0, ALARM = 1 }


	/**A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers. */
	export interface NotificationWithSubscribers {

		/**<p>A notification that is associated with a budget. A budget can have up to five notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul> */
		Notification: Notification;

		/**
		 * A list of subscribers.
		 * Minimum items: 1
		 * Maximum items: 11
		 */
		Subscribers: Array<Subscriber>;
	}


	/** The subscription type of the subscriber. It can be SMS or EMAIL. */
	export enum SubscriptionType { SNS = 0, EMAIL = 1 }

	@Injectable()
	export class DemoClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
		 * Post /#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget
		 * @return {CreateBudgetResponse} Success
		 */
		CreateBudget(requestBody: CreateBudgetRequest, headersHandler?: () => HttpHeaders): Observable<CreateBudgetResponse> {
			return this.http.post<CreateBudgetResponse>(this.baseUri + '/#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a notification. You must create the budget before you create the associated notification.
		 * Post /#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification
		 * @return {CreateNotificationResponse} Success
		 */
		CreateNotification(requestBody: CreateNotificationRequest, headersHandler?: () => HttpHeaders): Observable<CreateNotificationResponse> {
			return this.http.post<CreateNotificationResponse>(this.baseUri + '/#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Creates a subscriber. You must create the associated budget and notification before you create the subscriber.
		 * Post /#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber
		 * @return {CreateSubscriberResponse} Success
		 */
		CreateSubscriber(requestBody: CreateSubscriberRequest, headersHandler?: () => HttpHeaders): Observable<CreateSubscriberResponse> {
			return this.http.post<CreateSubscriberResponse>(this.baseUri + '/#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
		 * Post /#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget
		 * @return {DeleteBudgetResponse} Success
		 */
		DeleteBudget(requestBody: DeleteBudgetRequest, headersHandler?: () => HttpHeaders): Observable<DeleteBudgetResponse> {
			return this.http.post<DeleteBudgetResponse>(this.baseUri + '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
		 * Post /#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification
		 * @return {DeleteNotificationResponse} Success
		 */
		DeleteNotification(requestBody: DeleteNotificationRequest, headersHandler?: () => HttpHeaders): Observable<DeleteNotificationResponse> {
			return this.http.post<DeleteNotificationResponse>(this.baseUri + '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
		 * Post /#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber
		 * @return {DeleteSubscriberResponse} Success
		 */
		DeleteSubscriber(requestBody: DeleteSubscriberRequest, headersHandler?: () => HttpHeaders): Observable<DeleteSubscriberResponse> {
			return this.http.post<DeleteSubscriberResponse>(this.baseUri + '/#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
		 * Post /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget
		 * @return {DescribeBudgetResponse} Success
		 */
		DescribeBudget(requestBody: DescribeBudgetRequest, headersHandler?: () => HttpHeaders): Observable<DescribeBudgetResponse> {
			return this.http.post<DescribeBudgetResponse>(this.baseUri + '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.
		 * Post /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory
		 * @return {DescribeBudgetPerformanceHistoryResponse} Success
		 */
		DescribeBudgetPerformanceHistory(requestBody: DescribeBudgetPerformanceHistoryRequest, headersHandler?: () => HttpHeaders): Observable<DescribeBudgetPerformanceHistoryResponse> {
			return this.http.post<DescribeBudgetPerformanceHistoryResponse>(this.baseUri + '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
		 * Post /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets
		 * @return {DescribeBudgetsResponse} Success
		 */
		DescribeBudgets(requestBody: DescribeBudgetsRequest, headersHandler?: () => HttpHeaders): Observable<DescribeBudgetsResponse> {
			return this.http.post<DescribeBudgetsResponse>(this.baseUri + '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the notifications that are associated with a budget.
		 * Post /#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget
		 * @return {DescribeNotificationsForBudgetResponse} Success
		 */
		DescribeNotificationsForBudget(requestBody: DescribeNotificationsForBudgetRequest, headersHandler?: () => HttpHeaders): Observable<DescribeNotificationsForBudgetResponse> {
			return this.http.post<DescribeNotificationsForBudgetResponse>(this.baseUri + '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Lists the subscribers that are associated with a notification.
		 * Post /#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification
		 * @return {DescribeSubscribersForNotificationResponse} Success
		 */
		DescribeSubscribersForNotification(requestBody: DescribeSubscribersForNotificationRequest, headersHandler?: () => HttpHeaders): Observable<DescribeSubscribersForNotificationResponse> {
			return this.http.post<DescribeSubscribersForNotificationResponse>(this.baseUri + '/#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until AWS has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
		 * Post /#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget
		 * @return {UpdateBudgetResponse} Success
		 */
		UpdateBudget(requestBody: UpdateBudgetRequest, headersHandler?: () => HttpHeaders): Observable<UpdateBudgetResponse> {
			return this.http.post<UpdateBudgetResponse>(this.baseUri + '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a notification.
		 * Post /#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification
		 * @return {UpdateNotificationResponse} Success
		 */
		UpdateNotification(requestBody: UpdateNotificationRequest, headersHandler?: () => HttpHeaders): Observable<UpdateNotificationResponse> {
			return this.http.post<UpdateNotificationResponse>(this.baseUri + '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Updates a subscriber.
		 * Post /#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber
		 * @return {UpdateSubscriberResponse} Success
		 */
		UpdateSubscriber(requestBody: UpdateSubscriberRequest, headersHandler?: () => HttpHeaders): Observable<UpdateSubscriberResponse> {
			return this.http.post<UpdateSubscriberResponse>(this.baseUri + '/#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}


/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ProtobufAny {
  "@type"?: string;
  [key: string]: any;
}

/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 * The JSON representation for `NullValue` is JSON `null`.
 *
 *  - NULL_VALUE: Null value.
 * @default "NULL_VALUE"
 */
export enum ProtobufNullValue {
  NULL_VALUE = "NULL_VALUE",
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface V1CreateEntityResponse {
  entity?: V1Entity;
}

export interface V1CreateRelationshipResponse {
  relationship?: V1Relation;
}

export type V1DeleteEntityResponse = object;

export type V1DeleteRelationshipResponse = object;

export interface V1Entity {
  source?: V1Source;
  person?: V1Person;
  organization?: V1Organization;
  website?: V1Website;
  event?: V1Event;
}

export interface V1Event {
  /**
   * Common data
   * @gotags: json:"_id,omitempty"
   */
  id?: string;
  /** @gotags: json:"_key,omitempty" */
  key?: string;
  /** @gotags: json:"_rev,omitempty" */
  rev?: string;
  owner?: string;
  read?: string[];
  write?: string[];
  /** Main Data */
  type?: string;
  location?: V1LocationData;
  title?: string;
  description?: string;
  /**
   * Time data
   * @format int64
   */
  happenedAt?: string;
  /** @format int64 */
  updatedAt?: string;
  /** Additional */
  tags?: string[];
  attributes?: object;
}

export interface V1GetEntityResponse {
  entity?: V1Entity;
}

export interface V1ListEntitiesFromEventResponse {
  entities?: V1Entity[];
  relations?: V1Relation[];
}

export interface V1LocationData {
  /** @format float */
  latitude?: number;
  /** @format float */
  longitude?: number;
  countryCode?: string;
  administrativeArea?: string;
  subAdministrativeArea?: string;
  locality?: string;
  subLocality?: string;
  address?: string;
  /** @format int32 */
  postalCode?: number;
}

export interface V1Organization {
  /**
   * Common data
   * @gotags: json:"_id,omitempty"
   */
  id?: string;
  /** @gotags: json:"_key,omitempty" */
  key?: string;
  /** @gotags: json:"_rev,omitempty" */
  rev?: string;
  owner?: string;
  read?: string[];
  write?: string[];
  /** Main Data */
  type?: string;
  name?: string;
  /**
   * Time data
   * @format int64
   */
  foundedAt?: string;
  /** @format int64 */
  discoveredAt?: string;
  /** @format int64 */
  lastVisited?: string;
  /** Additional */
  tags?: string[];
  attributes?: object;
}

export interface V1Person {
  /**
   * Common data
   * @gotags: json:"_id,omitempty"
   */
  id?: string;
  /** @gotags: json:"_key,omitempty" */
  key?: string;
  /** @gotags: json:"_rev,omitempty" */
  rev?: string;
  owner?: string;
  read?: string[];
  write?: string[];
  /** Main Data */
  role?: string;
  name?: string;
  nationality?: string;
  /**
   * Time data
   * @format int64
   */
  birthDate?: string;
  /** @format int64 */
  updatedAt?: string;
  /** Additional */
  tags?: string[];
  aliases?: string[];
  attributes?: object;
}

export interface V1Relation {
  /**
   * Common data
   * @gotags: json:"_id,omitempty"
   */
  id?: string;
  /** @gotags: json:"_key,omitempty" */
  key?: string;
  /** @gotags: json:"_from,omitempty" */
  from?: string;
  /** @gotags: json:"_to,omitempty" */
  to?: string;
  /** @gotags: json:"_rev,omitempty" */
  rev?: string;
  owner?: string;
  read?: string[];
  write?: string[];
  /** Main Data */
  name?: string;
  /** @format int32 */
  confidence?: number;
  /**
   * Time Data
   * @format int64
   */
  createdAt?: string;
  /** @format int64 */
  updatedAt?: string;
  /** Additional Data */
  attributes?: object;
}

export interface V1Source {
  /**
   * Common data
   * @gotags: json:"_id,omitempty"
   */
  id?: string;
  /** @gotags: json:"_key,omitempty" */
  key?: string;
  /** @gotags: json:"_rev,omitempty" */
  rev?: string;
  owner?: string;
  read?: string[];
  write?: string[];
  /** Main Data */
  type?: string;
  url?: string;
  name?: string;
  title?: string;
  description?: string;
  /** @format int32 */
  reliability?: number;
  /**
   * Time data
   * @format int64
   */
  createdAt?: string;
  /** @format int64 */
  updatedAt?: string;
  /** Additional */
  tags?: string[];
  attributes?: object;
}

export interface V1UpdateEntityResponse {
  entity?: V1Entity;
}

export interface V1UpdateRelationshipResponse {
  relationship?: V1Relation;
}

export interface V1Website {
  /**
   * Common data
   * @gotags: json:"_id,omitempty"
   */
  id?: string;
  /** @gotags: json:"_key,omitempty" */
  key?: string;
  /** @gotags: json:"_rev,omitempty" */
  rev?: string;
  owner?: string;
  read?: string[];
  write?: string[];
  /** Main Data */
  url?: string;
  title?: string;
  description?: string;
  /**
   * Time data
   * @format int64
   */
  foundedAt?: string;
  /** @format int64 */
  discoveredAt?: string;
  /** @format int64 */
  lastVisited?: string;
  /** Additional */
  tags?: string[];
  attributes?: object;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Data API
 * @version 1.0.0
 * @license Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0.html)
 * @contact Omni Team
 *
 * The OSINT data API handles data for OSINT operations.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * No description
     *
     * @tags EntityService
     * @name EntityServiceListEntitiesFromEvent
     * @request GET:/v1/entities/event
     */
    entityServiceListEntitiesFromEvent: (
      query?: {
        startNode?: string;
        /** @format int64 */
        startTime?: string;
        /** @format int64 */
        endTime?: string;
        countryCode?: string;
        tag?: string;
        /** @format int32 */
        depth?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1ListEntitiesFromEventResponse, RpcStatus>({
        path: `/v1/entities/event`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntityService
     * @name EntityServiceCreateEntity
     * @request POST:/v1/entities/{entityType}
     */
    entityServiceCreateEntity: (entityType: string, entity: V1Entity, params: RequestParams = {}) =>
      this.request<V1CreateEntityResponse, RpcStatus>({
        path: `/v1/entities/${entityType}`,
        method: "POST",
        body: entity,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntityService
     * @name EntityServiceGetEntity
     * @request GET:/v1/entities/{entityType}/{key}
     */
    entityServiceGetEntity: (entityType: string, key: string, params: RequestParams = {}) =>
      this.request<V1GetEntityResponse, RpcStatus>({
        path: `/v1/entities/${entityType}/${key}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntityService
     * @name EntityServiceDeleteEntity
     * @request DELETE:/v1/entities/{entityType}/{key}
     */
    entityServiceDeleteEntity: (entityType: string, key: string, params: RequestParams = {}) =>
      this.request<V1DeleteEntityResponse, RpcStatus>({
        path: `/v1/entities/${entityType}/${key}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntityService
     * @name EntityServiceUpdateEntity
     * @request PUT:/v1/entities/{entityType}/{key}
     */
    entityServiceUpdateEntity: (entityType: string, key: string, entity: V1Entity, params: RequestParams = {}) =>
      this.request<V1UpdateEntityResponse, RpcStatus>({
        path: `/v1/entities/${entityType}/${key}`,
        method: "PUT",
        body: entity,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RelationshipService
     * @name RelationshipServiceCreateRelationship
     * @request POST:/v1/relationships
     */
    relationshipServiceCreateRelationship: (relationship: V1Relation, params: RequestParams = {}) =>
      this.request<V1CreateRelationshipResponse, RpcStatus>({
        path: `/v1/relationships`,
        method: "POST",
        body: relationship,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RelationshipService
     * @name RelationshipServiceDeleteRelationship
     * @request DELETE:/v1/relationships/{collection}/{key}
     */
    relationshipServiceDeleteRelationship: (collection: string, key: string, params: RequestParams = {}) =>
      this.request<V1DeleteRelationshipResponse, RpcStatus>({
        path: `/v1/relationships/${collection}/${key}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags RelationshipService
     * @name RelationshipServiceUpdateRelationship
     * @request PUT:/v1/relationships/{collection}/{key}
     */
    relationshipServiceUpdateRelationship: (
      collection: string,
      key: string,
      relationship: V1Relation,
      params: RequestParams = {},
    ) =>
      this.request<V1UpdateRelationshipResponse, RpcStatus>({
        path: `/v1/relationships/${collection}/${key}`,
        method: "PUT",
        body: relationship,
        format: "json",
        ...params,
      }),
  };
}

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

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
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
  visible?: boolean;
  /** Main Data */
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
}

export interface V1GetEventRelatedEntitiesResponse {
  entities?: V1RelatedEntity[];
}

export interface V1GetEventsResponse {
  relations?: V1Relation[];
  events?: V1Event[];
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
  visible?: boolean;
  /** Main Data */
  name?: string;
  type?: string;
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
  visible?: boolean;
  /** Main Data */
  name?: string;
  role?: string;
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
}

export interface V1RelatedEntity {
  relation?: V1Relation;
  source?: V1Source;
  person?: V1Person;
  organization?: V1Organization;
  website?: V1Website;
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
  /** Main Data */
  name?: string;
  /** @format int32 */
  confidence?: number;
  attributes?: Record<string, V1RelationValue>;
  /**
   * Time data
   * @format int64
   */
  createdAt?: string;
  /** @format int64 */
  updatedAt?: string;
}

export interface V1RelationValue {
  stringValue?: string;
  /** @format int64 */
  intValue?: string;
  /** @format double */
  doubleValue?: number;
  /** @format float */
  floatValue?: number;
  boolValue?: boolean;
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
  visible?: boolean;
  /** Main Data */
  name?: string;
  url?: string;
  rootUrl?: string;
  /** @format int32 */
  reliability?: number;
  /** @format int32 */
  monitoring?: number;
  /**
   * Time data
   * @format int64
   */
  createdAt?: string;
  /** @format int64 */
  updatedAt?: string;
  /** Additional */
  tags?: string[];
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
  visible?: boolean;
  /** Main Data */
  url?: string;
  domain?: string;
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
 * @title Geovision API
 * @version 1.0.0
 * @license Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0.html)
 * @contact Omni Team
 *
 * The Geovision API handles data for geovision uses.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * No description
     *
     * @tags GeoService
     * @name GeoServiceGetEvents
     * @request GET:/v1/events
     */
    geoServiceGetEvents: (
      query?: {
        /** @format int64 */
        startTime?: string;
        /** @format int64 */
        endTime?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<V1GetEventsResponse, RpcStatus>({
        path: `/v1/events`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoService
     * @name GeoServiceGetEventRelatedEntities
     * @request GET:/v1/events/{key}/related-entities
     */
    geoServiceGetEventRelatedEntities: (key: string, params: RequestParams = {}) =>
      this.request<V1GetEventRelatedEntitiesResponse, RpcStatus>({
        path: `/v1/events/${key}/related-entities`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}

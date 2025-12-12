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

export interface V1CreateEventResponse {
  event?: V1Event;
}

export interface V1CreateOrganizationResponse {
  organization?: V1Organization;
}

export interface V1CreatePersonResponse {
  person?: V1Person;
}

export interface V1CreateRelationshipResponse {
  relationship?: V1Relation;
}

export interface V1CreateSourceResponse {
  source?: V1Source;
}

export interface V1CreateWebsiteResponse {
  website?: V1Website;
}

export type V1DeleteEventResponse = object;

export type V1DeleteOrganizationResponse = object;

export type V1DeletePersonResponse = object;

export type V1DeleteRelationshipResponse = object;

export type V1DeleteSourceResponse = object;

export type V1DeleteWebsiteResponse = object;

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
  roles?: string[];
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

export interface V1GetEventResponse {
  event?: V1Event;
}

export interface V1GetOrganizationResponse {
  organization?: V1Organization;
}

export interface V1GetPersonResponse {
  person?: V1Person;
}

export interface V1GetSourceResponse {
  source?: V1Source;
}

export interface V1GetWebsiteResponse {
  website?: V1Website;
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
  roles?: string[];
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
  roles?: string[];
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
  roles?: string[];
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
  roles?: string[];
  /** Main Data */
  name?: string;
  url?: string;
  rootUrl?: string;
  /** @format int32 */
  reliability?: number;
  /** @format int32 */
  monitoring?: number;
  title?: string;
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

export interface V1UpdateEventResponse {
  event?: V1Event;
}

export interface V1UpdateOrganizationResponse {
  organization?: V1Organization;
}

export interface V1UpdatePersonResponse {
  person?: V1Person;
}

export interface V1UpdateRelationshipResponse {
  relationship?: V1Relation;
}

export interface V1UpdateSourceResponse {
  source?: V1Source;
}

export interface V1UpdateWebsiteResponse {
  website?: V1Website;
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
  roles?: string[];
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
 * @title Foundation API
 * @version 1.0.0
 * @license Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0.html)
 * @contact Omni Team
 *
 * The Foundation API handles data for data CRUD operations.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * No description
     *
     * @tags EventService
     * @name EventServiceCreateEvent
     * @request POST:/v1/events
     */
    eventServiceCreateEvent: (event: V1Event, params: RequestParams = {}) =>
      this.request<V1CreateEventResponse, RpcStatus>({
        path: `/v1/events`,
        method: "POST",
        body: event,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EventService
     * @name EventServiceGetEvent
     * @request GET:/v1/events/{key}
     */
    eventServiceGetEvent: (key: string, params: RequestParams = {}) =>
      this.request<V1GetEventResponse, RpcStatus>({
        path: `/v1/events/${key}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EventService
     * @name EventServiceDeleteEvent
     * @request DELETE:/v1/events/{key}
     */
    eventServiceDeleteEvent: (key: string, params: RequestParams = {}) =>
      this.request<V1DeleteEventResponse, RpcStatus>({
        path: `/v1/events/${key}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EventService
     * @name EventServiceUpdateEvent
     * @request PUT:/v1/events/{key}
     */
    eventServiceUpdateEvent: (key: string, event: V1Event, params: RequestParams = {}) =>
      this.request<V1UpdateEventResponse, RpcStatus>({
        path: `/v1/events/${key}`,
        method: "PUT",
        body: event,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationService
     * @name OrganizationServiceCreateOrganization
     * @request POST:/v1/organizations
     */
    organizationServiceCreateOrganization: (organization: V1Organization, params: RequestParams = {}) =>
      this.request<V1CreateOrganizationResponse, RpcStatus>({
        path: `/v1/organizations`,
        method: "POST",
        body: organization,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationService
     * @name OrganizationServiceGetOrganization
     * @request GET:/v1/organizations/{key}
     */
    organizationServiceGetOrganization: (key: string, params: RequestParams = {}) =>
      this.request<V1GetOrganizationResponse, RpcStatus>({
        path: `/v1/organizations/${key}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationService
     * @name OrganizationServiceDeleteOrganization
     * @request DELETE:/v1/organizations/{key}
     */
    organizationServiceDeleteOrganization: (key: string, params: RequestParams = {}) =>
      this.request<V1DeleteOrganizationResponse, RpcStatus>({
        path: `/v1/organizations/${key}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationService
     * @name OrganizationServiceUpdateOrganization
     * @request PUT:/v1/organizations/{key}
     */
    organizationServiceUpdateOrganization: (key: string, organization: V1Organization, params: RequestParams = {}) =>
      this.request<V1UpdateOrganizationResponse, RpcStatus>({
        path: `/v1/organizations/${key}`,
        method: "PUT",
        body: organization,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PersonService
     * @name PersonServiceCreatePerson
     * @request POST:/v1/persons
     */
    personServiceCreatePerson: (person: V1Person, params: RequestParams = {}) =>
      this.request<V1CreatePersonResponse, RpcStatus>({
        path: `/v1/persons`,
        method: "POST",
        body: person,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PersonService
     * @name PersonServiceGetPerson
     * @request GET:/v1/persons/{key}
     */
    personServiceGetPerson: (key: string, params: RequestParams = {}) =>
      this.request<V1GetPersonResponse, RpcStatus>({
        path: `/v1/persons/${key}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PersonService
     * @name PersonServiceDeletePerson
     * @request DELETE:/v1/persons/{key}
     */
    personServiceDeletePerson: (key: string, params: RequestParams = {}) =>
      this.request<V1DeletePersonResponse, RpcStatus>({
        path: `/v1/persons/${key}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PersonService
     * @name PersonServiceUpdatePerson
     * @request PUT:/v1/persons/{key}
     */
    personServiceUpdatePerson: (key: string, person: V1Person, params: RequestParams = {}) =>
      this.request<V1UpdatePersonResponse, RpcStatus>({
        path: `/v1/persons/${key}`,
        method: "PUT",
        body: person,
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

    /**
     * No description
     *
     * @tags SourceService
     * @name SourceServiceCreateSource
     * @request POST:/v1/sources
     */
    sourceServiceCreateSource: (source: V1Source, params: RequestParams = {}) =>
      this.request<V1CreateSourceResponse, RpcStatus>({
        path: `/v1/sources`,
        method: "POST",
        body: source,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SourceService
     * @name SourceServiceGetSource
     * @request GET:/v1/sources/{key}
     */
    sourceServiceGetSource: (key: string, params: RequestParams = {}) =>
      this.request<V1GetSourceResponse, RpcStatus>({
        path: `/v1/sources/${key}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SourceService
     * @name SourceServiceDeleteSource
     * @request DELETE:/v1/sources/{key}
     */
    sourceServiceDeleteSource: (key: string, params: RequestParams = {}) =>
      this.request<V1DeleteSourceResponse, RpcStatus>({
        path: `/v1/sources/${key}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SourceService
     * @name SourceServiceUpdateSource
     * @request PUT:/v1/sources/{key}
     */
    sourceServiceUpdateSource: (key: string, source: V1Source, params: RequestParams = {}) =>
      this.request<V1UpdateSourceResponse, RpcStatus>({
        path: `/v1/sources/${key}`,
        method: "PUT",
        body: source,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebsiteService
     * @name WebsiteServiceCreateWebsite
     * @request POST:/v1/websites
     */
    websiteServiceCreateWebsite: (website: V1Website, params: RequestParams = {}) =>
      this.request<V1CreateWebsiteResponse, RpcStatus>({
        path: `/v1/websites`,
        method: "POST",
        body: website,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebsiteService
     * @name WebsiteServiceGetWebsite
     * @request GET:/v1/websites/{key}
     */
    websiteServiceGetWebsite: (key: string, params: RequestParams = {}) =>
      this.request<V1GetWebsiteResponse, RpcStatus>({
        path: `/v1/websites/${key}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebsiteService
     * @name WebsiteServiceDeleteWebsite
     * @request DELETE:/v1/websites/{key}
     */
    websiteServiceDeleteWebsite: (key: string, params: RequestParams = {}) =>
      this.request<V1DeleteWebsiteResponse, RpcStatus>({
        path: `/v1/websites/${key}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebsiteService
     * @name WebsiteServiceUpdateWebsite
     * @request PUT:/v1/websites/{key}
     */
    websiteServiceUpdateWebsite: (key: string, website: V1Website, params: RequestParams = {}) =>
      this.request<V1UpdateWebsiteResponse, RpcStatus>({
        path: `/v1/websites/${key}`,
        method: "PUT",
        body: website,
        format: "json",
        ...params,
      }),
  };
}

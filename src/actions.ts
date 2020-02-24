import { BaseTreeNode } from './source/source';

export const conditionActionRules: Record<
  string,
  {
    filter: (n: BaseTreeNode<any>, arg: string | undefined) => boolean | undefined;
    getDescription: (arg: string | undefined) => string;
  }
> = {
  'expandable?': {
    filter: (n) => n.expandable,
    getDescription: () => 'expandable?',
  },
  'type?': {
    filter: (n, arg) => n.type === arg,
    getDescription: (arg) => `type is ${arg}`,
  },
};

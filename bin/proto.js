const { execSync } = require('child_process')
const path = require('path')

const PROTO_DIR = path.join(__dirname, '../protos')
const MODEL_DIR = path.join(__dirname, '../compiled_proto')
const PROTOC_PATH = path.join(
  __dirname,
  '../node_modules/grpc-tools/bin/protoc',
)
const PLUGIN_PATH = path.join(
  __dirname,
  '../node_modules/.bin/protoc-gen-ts_proto',
)

const protoConfig = [
  `--plugin=${PLUGIN_PATH}`,
  '--ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false,env=node,useOptionals=none,exportCommonSymbols=false,esModuleInterop=true,useDate=true,useObjectId=true,useAsyncIterable=true',
  `--ts_proto_out=${MODEL_DIR}`,
  `--proto_path ${PROTO_DIR} ${PROTO_DIR}/*.proto`,
]

// https://github.com/stephenh/ts-proto#usage
execSync(`${PROTOC_PATH} ${protoConfig.join(' ')}`)
console.log(`> Proto models created: ${MODEL_DIR}`)

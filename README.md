# DB設計

## groups_usersテーブル

|Column|Type|association|
|------|----|-------|
|user_id|integer|through: :groups_users|
|group_id|integer|through: :groups_users|

## groupsテーブル

|Column|Type|association|
|------|----|-------|
|id|integer|-has_many: groups|
|created_at|datetime|-has_many: groups|
|updated_at|datetime|-has_many: groups|

## usersテーブル

|Column|Type|association|
|------|----|-------|
|id|integer|-has_many: users|
|created_at|datetime|-has_many: users|
|updated_at|datetime|-has_many: users|
|email|integer|-has_many: users|

## contentsテーブル

|Column|Type|association|
|------|----|-------|
|created_at|datetime|-has_many: contents|
|update_at|datetime|-has_many: contents|
|group_name|integer|-has_many: contents|

## commentsテーブル

|Column|Type|association|
|------|----|-------|
|send|integer|-has_many: comments|
|image|integer|-has_many: comments|
|user_id|integer|-has_many: comments|
|group_id|integer|-has_many: comments|
|created_at|datetime|-has_many: comments|
|updated_to|datetime|-has_many: comments|